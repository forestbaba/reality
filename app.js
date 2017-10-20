var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var PORT = process.env.PORT ||  8080;

app.get('/home', function(req, res)
{
    res.json('Hello to the base again');
})

app.listen(PORT, function () {
    console.log('We are now live');
})