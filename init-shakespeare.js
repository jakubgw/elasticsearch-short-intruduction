import * as request from 'request-promise'
import * as fs from 'fs'

var options = {
    method: 'POST',
    uri: 'http://localhost:9200/shakespeare/doc/_bulk?pretty',    
    body: fs.createReadStream("C:\\repos\\playground\\elastic-search-short-introduction\\shakespeare_6.0.json"),
    headers: {
        'Content-Type': 'application/x-ndjson'
    }
};

request(options)
    .then(function (data) {
        console.log('User has %d repos');
    })
    .catch(function (err) {
        console.log(err.message || err);
    });