
# Elasticsearch short introduction

## Run cluster & kibana 

```
run : docker-compose up -d
```
stop : docker-compose down
```

## Load sample data


```
node .\create-index.js shakespeare
```
node .\create-index.js logs
```
node .\create-index.js accounts
```

## Sample calls 
load elastic-search-introduction.postman_collection.json into postman 

## Presentation 
elasticsearch short introduction.pptx

## References
https://www.elastic.co/guide/en/elasticsearch/reference/6.3/analysis-ngram-tokenizer.html#analysis-ngram-tokenizer
https://www.elastic.co/guide/en/kibana/current/tutorial-load-dataset.html
https://www.elastic.co/assets/blt395810ab50bd150b/6.3_es_commands.txt
http://elasticsearch-cheatsheet.jolicode.com
https://medium.com/@anuj.verma/performing-aggregation-on-elasticsearch-data-4dd5fca6bdfd    
https://www.elastic.co/guide/en/elasticsearch/guide/current/lowercase-token-filter.html
