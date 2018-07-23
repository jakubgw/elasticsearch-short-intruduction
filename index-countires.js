const fs = require("fs");
const path = require("path");
const request = require("request-promise");

const insert = () => {
    
    console.log(`Index insert countries`);
    const test = fs.readFileSync(path.join(__dirname, 'countries' ,'countries.json'));

    // JSON.parse(test).features.forEach(element => {
    //     const options = {
    //         method: 'PUT',
    //         uri: `http://localhost:9200/countries/`,    
    //         body: JSON.stringify(element),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     };
    //     request(options)
    //         .then(() => {
    //             console.log(`Index created ${indexName}`);
    //         })
    //         .catch((err) => {
    //             console.log(err.message || err);
    //         });
    // });
    
    const a = JSON.parse(test).features[0];
    console.log(JSON.stringify(a));
    // const options = {
    //     method: 'PUT',
    //     uri: `http://localhost:9200/countries/`,    
    //     body: a,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // };
    // request(options)
    //     .then(() => {
    //         console.log(`Index created ${indexName}`);
    //     })
    //     .catch((err) => {
    //         console.log(err.message || err);
    //     });


}

insert();







