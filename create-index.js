const request = require("request-promise");
const fs = require("fs");
const path = require("path");

const insert = (indexName) => {
    
    console.log(`Index insert ${indexName}`);
    var options = {
        method: 'POST',
        uri: `http://localhost:9200/${indexName}/doc/_bulk?pretty`,    
        body: fs.createReadStream(path.join(__dirname, indexName , `${indexName}.json`)),
        headers: {
            'Content-Type': 'application/x-ndjson'
        }
    };

    return request(options)
        .then(() => {
            console.log(`Index created ${indexName}`);
        })      
}

const createMappings = (indexName) => {
    const mappingFile = path.join(__dirname, indexName , `mappings.json`);

    if(!fs.existsSync(mappingFile)) {
        console.log(`Mapping file does not exist ${mappingFile}`)
        
        return Promise.resolve();
    }

    const mapping = fs.readFileSync (mappingFile);
        
    var options = {
        method: 'PUT',
        uri: `http://localhost:9200/${indexName}`,    
        body: mapping,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    return request(options)
        .then(() => {
            console.log(`Mappings created ${indexName}`);
        })
      
}

const indexName = process.argv[2];

createMappings(indexName)
    .then(() => insert(indexName))
    . catch((err) => {
        console.log(err.message || err);
    });
;







