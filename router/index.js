var express = require('express');
var router = express.Router()
var swig = require('swig')
var router = require('./router')

swig.setDefaults({cache: false});
app.set('view cache', false);
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use('/static', express.static('public'))