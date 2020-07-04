const express = require('express');
const app = express();
const https = require('https');

const request = require('request');
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index');
});