/**
 * Created by DELL- on 2017/10/19.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);