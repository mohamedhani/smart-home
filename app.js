const express =require('express');
const bodyparser=require('body-parser');
const path = require('path');
//my files 
const projectPath = require('./utailts/projectPath');
const mainPageRoute = require('./routes/mainPageRoute');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(projectPath.path,'styles')));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json({}));

app.use(mainPageRoute);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port,server_host,()=>{
    console.log("connected");

});