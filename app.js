var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening at 3000');
});


var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://hobby-enhegfiekfbbgbkeeiabnjcl.dbs.graphenedb.com:24786", neo4j.auth.basic("testuser", "b.wL09s3K55k9b.xSXaIJhGayMY6WTn"));

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
