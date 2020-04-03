<!-- Copyright Verizon Media. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. -->
# Vespa powered search of the CORD-19 dataset 

We have indexed the [COVID-19 Open Research Dataset (CORD-19)](https://pages.semanticscholar.org/coronavirus-research) in a Vespa instance running in the [Vespa Cloud](https://cloud.vespa.ai/). 
There is a simple search frontend at https://cord19.vespa.ai/ and api access at https://api.cord19.vespa.ai/search/?query=covid-19&summary=short 

## Front end query language
The https://cord19.vespa.ai/ query interface supports the Vespa [simple query language](https://docs.vespa.ai/documentation/reference/simple-query-language-reference.html):

* Use +query_term to specify that the result **must** include the term and -query_term for **must not**. 
* "viral transmissions" searches for the phrase  
* Example *+"viral transmission" covid-19 -1918* Must have the phrase "viral transmission" and should have 'covid-19' and must not include the term '1918'
* To search specific fields use fieldname:query_term, e.g +title:"reproduction number". 
* Use () for OR: +("SARS-COV-2" "coronavirus 2" "novel coronavirus") specifies that documents must match any of these three phrases.  

Query examples:
* [+covid-19 +temperature impact on viral transmission](https://cord19.vespa.ai/search?query=%2Bcovid-19+%2Btemperature+impact+on+viral+transmission)
* [basic reproduction numbers for covid-19 in +"south korea"](https://cord19.vespa.ai/search?query=basic+reproduction+numbers+for+covid-19+in+%2B%22south+korea%22)
* [Impact of school closure to handle COVID-19 pandemic](https://cord19.vespa.ai/search?query=Impact+of+school+closure+to+handle+COVID-19+pandemic) 
* [+title:"reproduction number" +abstract:MERS](https://cord19.vespa.ai/search?query=%2Btitle%3A%22reproduction+number%22+%2Babstract%3AMERS) 
* [+authors.last:knobel](https://cord19.vespa.ai/search?query=authors.last%3Aknobel)
* [+("SARS-COV-2" "coronavirus 2" "novel coronavirus")](https://cord19.vespa.ai/search?query=+%2B%28%22SARS-COV-2%22+%22coronavirus+2%22+%22novel+coronoavirus%22%29)
* [+chloroquine +(covid-19 coronavirus)](https://cord19.vespa.ai/search?query=%2Bchloroquine+%2B%28covid-19+coronavirus%29)
* [authors.name:"Neil M Ferguson"](https://cord19.vespa.ai/search?author=Neil+M+Ferguson&query=authors.name%3A%22Neil+M+Ferguson%22)


## Similar articles
See [Similar articles](similar_articles.md) for how similar articles works. 

## API Access

* Frontend: https://cord19.vespa.ai/  
* Full API access: https://api.cord19.vespa.ai/search/
* [Sample Kaggle Notebook: Semantic Search Using Vespa.ai's CORD-19 index](https://www.kaggle.com/jkb123/semantic-search-using-vespa-ai-s-cord19-index)

For using the Search Api of Vespa please see  [API documentation](https://docs.vespa.ai/documentation/search-api.html), [YQL Query Language](https://docs.vespa.ai/documentation/query-language.html).
For the full document definition see [doc.sd](https://github.com/vespa-engine/sample-apps/blob/master/vespa-cloud/cord-19-search/src/main/application/searchdefinitions/doc.sd).

### High level field description 
These are the most important fields in the dataset

|field|source in CORD-19|indexed/searchable|summary (returned with hit)|available for grouping|matching|Vespa type|
|---|---|---|---|---|--|--|
|default|title + abstract|yes|no|no|tokenized and stemmed (match:text)|fieldset |
|all |title + abstract + body_text|yes|no|no|tokenized and stemmed (match:text)|fieldset |
|title|title from metadata or from contents of *sha* json file|yes|yes with bolding|no|tokenized and stemmed (match:text)|string|
|abstract|abstract|yes|yes with bolding and dynamic summary|no|tokenized and stemmed (match:text)|string|
|body_text|All body_text sections|yes|yes with bolding and dynamic summary|no|tokenized and stemmed (match:text)|string|
|datestring|datestring from metadata|no|yes|yes|no|string|
|timestamp|Epoch Unix time stamp parsed from datestring|yes|yes|yes|range and exact matching - can also be sorted on|long|
|license|license|yes|yes|yes|exact matching|string|
|journal|journal|yes|yes|yes|exact matching|string|
|has_full_text|has_full_text|yes|yes|yes|exact matching|bool|
|doi|https:// + doi from metadata|no|yes|no|no|string|
|id|row id from metadata.csv|yes|yes|yes|yes|int|
|title_embedding|[SciBERT-NLI](https://huggingface.co/gsarti/scibert-nli) embedding from title|yes (using nearestNeighbor())|no|no|yes|tensor<float>(x[768])|
|abstract_embedding|[SciBERT-NLI](https://huggingface.co/gsarti/scibert-nli) embedding from abstract|yes (using nearestNeighbor())|no|no|yes|tensor<float>(x[768])|
|authors|authors in metadata or authors from sha json if found|yes using sameElement()|yes|yes|yes|array of struct|


## Ranking
See Vespa's [Ranking documentation](https://docs.vespa.ai/documentation/ranking.html). There are 3 ranking profiles available 

|Ranking|Description|
|---|---|
|default|The default Vespa ranking function (nativeRank) which also uses term proximity for multi-term queries|
|bm25|Linear sum: bm25(title) + bm25(abstract) + bm25(body_text)|
|bm25fw|Linear weighted sum: 0.6*bm25(title) + 0.3*bm25(abstract) + 0.1*bm25(body_text)|
|freshness|By decreasing timestamp|

See [Vespa BM25](https://docs.vespa.ai/documentation/reference/bm25.html) and [Vespa nativeRank](https://docs.vespa.ai/documentation/reference/nativerank.html)

The ranking profiles are defined in the [document definition (doc.sd)](https://github.com/vespa-engine/sample-apps/blob/master/vespa-cloud/cord-19-search/src/main/application/searchdefinitions/doc.sd).

## Example API queries
For using the Search Api of Vespa please see  [API documentation](https://docs.vespa.ai/documentation/search-api.html), [YQL Query Language](https://docs.vespa.ai/documentation/query-language.html).
In the below examples we use python with the requests api, using the POST search api.
```python
import requests 

#Search for documents matching all query terms (either in title or abstract)
search_request_all = {
  'yql': 'select id,title, abstract, doi from sources * where userQuery();',
  'hits': 5,
  'summary': 'short',
  'timeout': '1.0s',
  'query': 'coronavirus temperature sensitivity',
  'type': 'all',
  'ranking': 'default'
}

#Search for documents matching any of query terms (either in title or abstract)
search_request_any = {
  'yql': 'select id,title, abstract, doi from sources * where userQuery();',
  'hits': 5,
  'summary': 'short',
  'timeout': '1.0s',
  'query': 'coronavirus temperature sensitivity',
  'type': 'any',
  'ranking': 'default'
}

#Restrict matching to abstract field and filter by timestamp
search_request_all_abstract = {
  'yql': 'select id,title, abstract, doi from sources * where userQuery() and has_full_text=true and timestamp > 1577836800;',
  'default-index': 'abstract',
  'hits': 5,
  'summary': 'short',
  'timeout': '1.0s',
  'query': '"sars-cov-2" temperature',
  'type': 'all',
  'ranking': 'default'
}

#Search authors which is an array of struct using sameElement operator
search_request_authors= {
  'yql': 'select id,authors from sources * where authors contains sameElement(first contains "Keith", last contains "Mansfield");',
  'hits': 5,
  'summary': 'short',
  'timeout': '1.0s',
}

#Sample request 
endpoint='https://api.cord19.vespa.ai/search/'
response = requests.post(endpoint, json=search_request_all)
```





 


 
