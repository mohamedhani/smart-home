const fs = require('fs');
const path = require('path');
const projectPath = require('../utailts/projectPath');
const home = require('../models/home')
const dataFilePath = path.join(projectPath.path,'myfiles','datafile.json');
exports.getMainPage=(req,res,next)=>{
     console.log('enter 1');
     fs.readFile(dataFilePath,(err,data)=>{
         if(data!="")
         {
              data  = JSON.parse(data);
             const myHome = new home(data.temp,data.sw);
             console.log(myHome);
              res.render('mainPage.ejs',{temp:myHome.temp , sw :myHome.sw});
         }
     })
    
};
exports.setState=(req,res,next)=>{
     
 var temp = req.body.temp;
 var sw = req.body.sw;
const myHome  = new home(temp,sw);
console.log(myHome);
fs.writeFile(dataFilePath, JSON.stringify(myHome),()=>{
     res.json('done');
})
};