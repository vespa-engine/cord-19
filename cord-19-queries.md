<!-- Copyright Yahoo. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. -->
# Vespa powered search of the CORD-19 dataset 

## Query API
The default frontend query language searches uses [weakAnd](https://docs.vespa.ai/en/using-wand-with-vespa.html).

## Similar articles
The [similar articles](https://cord19.vespa.ai/article/816267) feature is implemented using
[approximate nearest neighbor search](https://docs.vespa.ai/en/approximate-nn-hnsw.html) over the 768 dimensional [specter embeddings](https://github.com/allenai/specter). Since the dataset contains a lot of duplicates, we also remove articles that are _too similar_ as
measured by cosine similarity. 

## Deduping

The CORD-19 dataset has a lot of near duplicates, for all search requests, we dedup the top 100 results, using 
the specter embeddings with document-to-document similarity and a similarity threshold. The dedup functionality is implemented in a  [Searcher](https://github.com/vespa-cloud/cord-19-search/blob/main/src/main/java/ai/vespa/example/cord19/searcher/DeDupingSearcher.java)


## API Access

* Frontend: https://cord19.vespa.ai/  
* Full API access: https://api.cord19.vespa.ai/search/

For using the Search Api of Vespa please see  [API documentation](https://docs.vespa.ai/documentation/search-api.html), [YQL Query Language](https://docs.vespa.ai/documentation/query-language.html).
For the full document definition see [doc.sd](https://github.com/vespa-engine/sample-apps/blob/master/vespa-cloud/cord-19-search/src/main/application/searchdefinitions/doc.sd).

### High level field description 
These are the most important fields in the dataset

|field|source in CORD-19|indexed/searchable|summary (returned with hit)|available for grouping|matching|Vespa type|
|---|---|---|---|---|--|--|
|default|title + abstract|yes|no|no|tokenized and stemmed (match:text)|fieldset |
|title|title from metadata|yes|yes with bolding|no|tokenized and stemmed (match:text)|string|
|abstract|abstract from metadata|yes|yes with bolding and dynamic summary|no|tokenized and stemmed (match:text)|string|
|journal|journal|yes|yes|yes|exact matching|string|
|source|source|yes|yes|yes|exact matching|string|
|doi|https:// + doi from metadata|no|yes|no|no|string|
|id|row id from metadata.csv|yes|yes|yes|yes|int|
|authors|authors in metadata or authors from sha json if found|yes using sameElement()|yes|yes|yes|array of struct|


## Ranking
See Vespa's [Ranking documentation](https://docs.vespa.ai/documentation/ranking.html). 
There are two ranking profiles available:

|Ranking|Description|
|---|---|
|bm25|Linear sum: bm25(title) + bm25(abstract)|
|colbert|Linear sum of colbert maxsim over title and abstract|


See [Vespa BM25](https://docs.vespa.ai/documentation/reference/bm25.html) and [ColBERT](https://blog.vespa.ai/pretrained-transformer-language-models-for-search-part-3/). 

The ranking profiles are defined in the [document definition (doc.sd)](https://github.com/vespa-engine/sample-apps/blob/master/vespa-cloud/cord-19-search/src/main/application/searchdefinitions/doc.sd).

## Example API queries
For using the Search Api of Vespa please see  [API documentation](https://docs.vespa.ai/documentation/search-api.html), [YQL Query Language](https://docs.vespa.ai/documentation/query-language.html).
In the below examples we use python with the requests api, using the POST search api.
```python
import requests 

#Search for documents matching all query terms (either in title or abstract)
search_request_all = {
  'yql': 'select id, title, abstract, doi from sources * where userQuery();',
  'hits': 5,
  'summary': 'short',
  'query': 'coronavirus temperature sensitivity',
  'type': 'all',
  'ranking': 'bm25'
}

#Search for documents matching any of query terms (either in title or abstract)
search_request_any = {
  'yql': 'select id, title, abstract, doi from sources * where userQuery();',
  'hits': 5,
  'summary': 'short',
  'query': 'coronavirus temperature sensitivity',
  'type': 'any',
  'ranking': 'colbert'
}

#Search for documents matching with weak and of query terms (either in title or abstract)
search_request_any = {
  'yql': 'select id, title, abstract, doi from sources * where userQuery();',
  'hits': 5,
  'summary': 'short',
  'query': 'coronavirus temperature sensitivity',
  'type': 'weakAnd',
  'ranking': 'colbert'
}

#Search authors which is an array of struct using sameElement operator
search_request_authors= {
  'yql': 'select id,authors from sources * where authors contains sameElement(first contains "Keith", last contains "Mansfield");',
  'hits': 5,
  'summary': 'short'
}

#Sample request 
endpoint='https://api.cord19.vespa.ai/search/'
response = requests.post(endpoint, json=search_request_all)
```