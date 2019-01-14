var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 8888!');
});


var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://hobby-geefdaeefcom.dbs.graphenedb.com:24786", neo4j.auth.basic("v303", "GtGq5rldxu"));

var session = driver.session();
session
    .run("CREATE (n:Person {name:'Bob'}) RETURN n.name")
    .then(function(result) {
        result.records.forEach(function(record) {
            console.log(record)
        });

        session.close();
    })
    .catch(function(error) {
        console.log(error);
    });
