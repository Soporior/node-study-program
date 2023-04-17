/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 16:44:00
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 13:45:09
 $ @FilePath: \node-study-program\07_express\代码\15_generator\routes\index.js
 $*/
const indexRoute = require("express").Router()
//导入
const formidable = require('formidable');
indexRoute.get('/',(req,res,next)=>[
    res.render("index",{title:"welcome"})
])
indexRoute.get('/test',(req,res,next)=>[
    res.render("index",{title:"test"})
])

indexRoute.get("/portrait",(req,res)=>{
    res.render('portrait');

})
indexRoute.post("/portrait",(req,res,next)=>{
    const form = formidable({
        multiples:true,
        uploadDir:__dirname+"/../public/images",
         //保持文件后缀
        keepExtensions: true,
        maxFileSize:200*1024*1024
    })
    form.parse(req,(err,fields,files)=>{
        if(err){
            next(err)
            return
        }
        let url = "/images/" + files.portrait.newFilename
        res.send(url)
    })


})
module.exports=indexRoute