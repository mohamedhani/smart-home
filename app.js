const express =require('express');
const bodyparser=require('body-parser');
const path = require('path');
//my files 
const projectPath = require('./utailts/projectPath');
const mainPageRoute = require('./routes/mainPageRoute');
const app = express();
/*
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(projectPath.path,'styles')));
app.use(bodyparser.urlencoded({extended:false}));*/
app.use(bodyparser.json({}));
app.get('/',(req,res,next)=>{
    console.log('main page');
    res.json("hello wold");
});
//app.use(mainPageRoute);

const port = process.env.port || 9000;

app.listen(port,()=>{
    console.log("connected");

});