const express = require('express');
const myroute = express.Router();
const controller = require('../contollers/mainPageController');
myroute.get("/mainPage",controller.getMainPage);
myroute.post('/addstate',controller.setState);

module.exports= myroute;
