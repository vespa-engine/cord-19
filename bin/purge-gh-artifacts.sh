#!/usr/bin/env bash

# Will delete all but last five artifacts from cord-19 frontend build
# Inspired by https://gist.github.com/lelegard/6a428f67ee08e86d0c2f1af3f4a633d0
# You need to personalize the GITHUB_USER and GITHUB_TOKEN below.

# Customize those three lines with your repository and credentials:
REPO=https://api.github.com/repos/vespa-engine/cord-19
GITHUB_USER=your-github-user-name
GITHUB_TOKEN=token-with-workflow-and-write-rights-on-repo


# Number of most recent versions to keep for each artifact:
KEEP=5

# Age of artifacts to delete regardless of count
KEEPDAYS=10

# A shortcut to call GitHub API.
ghapi() { curl --silent --location --user $GITHUB_USER:$GITHUB_TOKEN "$@"; }

# A temporary file which receives HTTP response headers.
TMPFILE=/tmp/tmp.$$

# Calculate date before witch all artifacts should be expired
KEEPLIMIT=$(date -v-${KEEPDAYS}d "+%Y%m%d" )
printf "Count limit is %d - date limit is %d\n" $KEEP $KEEPLIMIT

# An associative array, key: artifact name, value: number of artifacts of that name.
declare -A ARTCOUNT

# Process all artifacts on this repository, loop on returned "pages".
URL=$REPO/actions/artifacts
while [[ -n "$URL" ]]; do

    # Get current page, get response headers in a temporary file.
    JSON=$(ghapi --dump-header $TMPFILE "$URL")

    # Get URL of next page. Will be empty if we are at the last page.
    URL=$(grep '^Link:' "$TMPFILE" | tr ',' '\n' | grep 'rel="next"' | head -1 | sed -e 's/.*<//' -e 's/>.*//')
    rm -f $TMPFILE

    # Number of artifacts on this page:
    COUNT=$(( $(jq <<<$JSON -r '.artifacts | length') ))

    # Loop on all artifacts on this page.
    for ((i=0; $i < $COUNT; i++)); do
		
        # Get name of artifact and count instances of this name.
        name=$(jq <<<$JSON -r ".artifacts[$i].name?")
        created=$(jq <<<$JSON -r ".artifacts[$i].created_at?" | tr -d '-')
        created=${created%%T*}
        ARTCOUNT[$name]=$(( $(( ${ARTCOUNT[$name]} )) + 1))
		printf "#%d %s - %d\n" $i "$name" ${ARTCOUNT[$name]}
        # Check if we must delete this one.
        if [[ ${ARTCOUNT[$name]} -gt $KEEP || $created -le $KEEPLIMIT ]]; then
            id=$(jq <<<$JSON -r ".artifacts[$i].id?")
            size=$(( $(jq <<<$JSON -r ".artifacts[$i].size_in_bytes?") ))
            printf "Deleting %s #%d, %d bytes - created %s \n" "$name" ${ARTCOUNT[$name]} $size "$created"
            ghapi -X DELETE $REPO/actions/artifacts/$id
        fi
    done
done
