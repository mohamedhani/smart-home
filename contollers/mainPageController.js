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
             const myHome = new home(data.temp,data.sw1,data.sw2,data.sw3,data.sw4,data.sw5,data.   sw6);
             console.log(myHome);
              res.render('mainPage.ejs',{temp:myHome.temp , 
                                              sw1 :myHome.sw1,
                                              sw2:myHome.sw2,
                                              sw3:myHome.sw3,
                                              sw4:myHome.sw4,
                                              sw5:myHome.sw5,
                                              sw6:myHome.sw6 });
         }
     })
    
};
exports.setState=(req,res,next)=>{
     
 var temp = req.body.temp;
 var sw1 = req.body.sw1;
 var sw2 = req.body.sw2;
 var sw3 = req.body.sw3;
 var sw4 = req.body.sw4;
 var sw5 = req.body.sw5;
 var sw6 = req.body.sw6;
  
const myHome  = new home(temp,sw1,sw2,sw3,sw4,sw5,sw6);
console.log("new state is :"+ myHome);
fs.writeFile(dataFilePath, JSON.stringify(myHome),()=>{
     res.json('done');
})
};