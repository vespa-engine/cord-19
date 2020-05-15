<!-- Copyright Verizon Media. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. -->

# TREC-COVID 
This describes [cord19.vespa.ai](https://cord19.vespa.ai/)'s submissions to [TREC-COVID](https://ir.nist.gov/covidSubmit/). This is Work in Progress. 

## Round 1
Round 1 was 30 topics and we did a single run using query, question and narrative from the topic for retrieval and ranking using Vespa's [bm25 implementation](https://docs.vespa.ai/documentation/reference/bm25.html). 
The score of our run
can be found at the [TREC-COVID run 1 archive](https://ir.nist.gov/covidSubmit/archive/round1/bm25t5.pdf)  (PDF). Key metrics:

* Average precision @5 0.58
* Average precision @10 0.57
* Mean NDCG@10 0.4952


## Round 2
Round 2 introduced relevancy judgements from round 1 and 5 new topics in addition to the 30 topics in round 1. Given the [relevancy judgements](https://ir.nist.gov/covidSubmit/data/qrels-rnd1.txt) 
from round 1 we could train a ranking function using LTR [(Learning to rank)](https://docs.vespa.ai/documentation/tutorials/text-search-ml.html). 

### Retrieval function for round 2
In round 2 we observed from round 1 that many submissions did query re-writes and could report improved metrics so we adapted and changed our query routine, given a topic:

```json
 {
  "id": "1",
  "narrative": "seeking range of information about the SARS-CoV-2 virus's origin, including its evolution, animal source, and first transmission into humans",
  "query": "coronavirus origin",
  "question": "what is the origin of COVID-19"
 }
```
We process the topic textual fields to produce a rewritten query and a query embedding [tensor](https://docs.vespa.ai/documentation/tensor-user-guide.html) 
  * A query rewrite using on the combination of query, question and narrative using [scispaCy](https://allenai.github.io/scispacy/) 
  * Using [Sentence embeddings](https://github.com/UKPLab/sentence-transformers) using a pre-trained [scibert-sent](https://huggingface.co/gsarti/scibert-nli) model  

```python
import sys
import scispacy
import spacy
import json
from sentence_transformers import SentenceTransformer

topics = json.load(open(sys.argv[1]))
model = sys.argv[2]
model = SentenceTransformer(model)

nlp = spacy.load("en_core_sci_lg")
for t in topics:
  query = t['query']
  question = t['question']
  narrative = t['narrative']
  ents = nlp(query + ' ' + question + ' ' + narrative).ents
  query = ' '.join([str(e) for e in ents])
  t['query-rewrite'] = query
  vector = model.encode([query])[0].tolist()
  t['query-vector'] = vector

with open("topics-annotated.json","w") as fp:
  json.dump(topics, fp, indent=2)
```

Which for topic 1 would produce the following:

```json
 {
  "id": "1",
  "question": "what is the origin of COVID-19",
  "query": "coronavirus origin",
  "narrative": "seeking range of information about the SARS-CoV-2 virus's origin, including its evolution, animal source, and first transmission into humans",
  "query-rewrite": "coronavirus origin origin COVID-19 information SARS-CoV-2 virus's origin evolution animal source transmission humans",
  "query-vector": [
      0.28812721371650696,
      0.4815506339073181,
      ..
   ]
 }
```
See [round-2/topics-annotated.json](round-2/topics-annotated.json) for the full topic list with rewrites and query embedding vectors for round 2. 


### Getting features for Learning to Rank  


### Training the model 


### Deploying and executing the model 



 

