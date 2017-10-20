var express = require('express');
var app = express();


var PORT = process.env.PORT ||  8080;

app.get('/', function(req, res)
{
    res.json('Hello to the base');
})

app.listen(PORT, function () {
    console.log('We are now live');
})