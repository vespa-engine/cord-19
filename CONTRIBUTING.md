<!-- Copyright Verizon Media. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. -->
# Contributing to Vespa CORD-19
Contributions are greatly appreciated.
This document describes what’s needed to contribute.
If you have any questions, tweet us @vespaengine.

Contribution can include:
* Improvements to ranking
* Improvement to data quality
* Frontend improvements

To contribute, make a PR - the Vespa Team reviews and merges at best effort. For 
contributions to ranking or data quality, see the 
[cord-19-search](https://github.com/vespa-engine/sample-apps/tree/master/vespa-cloud/cord-19-search) 
repo for details.

## Running frontend locally
To work on the frontend application, it is easiest to run a version of the frontend
locally on your machine to test your changes before submitting a PR. 
1. Clone this repo to your local work directory.
1. Install and start [Docker](https://www.docker.com/products/docker-desktop) if you haven't already.
1. Download and start an instance needed to run the front-end: \
`$ docker run -ti --rm --name cord-19 -p 3000:3000 --entrypoint /bin/sh -v /PATH/TO/WORKDIR/cord-19:/app -w /app node:12-alpine`
1. Inside the container, install the dependencies: \
`/app # yarn install`
1. Now start the frontend server: \
`/app # yarn start`

Your local copy of the frontend should now be running on http://localhost:3000/.

## Issues
We track issues in [GitHub issues](https://github.com/vespa-engine/cord-19/issues).
It is OK to submit issues also for feature requests and ideas,
whether or not you intend to work on them.

## License and copyright
If you add new files you are welcome to use your own copyright.
In any case the code (or documentation) you submit will be licensed
under the Apache 2.0 license.
