require('dotenv').config();
const express = require('express');
const app = express();
app.set('trust proxy', 1);


//Setup Môi Trường server
require('./config/environment')(app);
//Setup Routing
require('./app/routers/routes')(app);


var server = require('http').createServer(app);
let port = 5000;
server.listen(process.env.PORT || port, function () {
    console.log('Server is running !');
});

