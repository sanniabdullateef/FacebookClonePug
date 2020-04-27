// //Load HTTP module
const http = require("http");

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userRoute = require('./Router/user');
const adminRoute = require('./Router/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/Public'));
app.use('/bootstrap', express.static(__dirname + '/Public/dist/css'));
 
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'pug');

app.use('/', userRoute);
app.use('/admin', adminRoute);

const server = http.createServer(app)
module.exports = server