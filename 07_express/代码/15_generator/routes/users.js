/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 14:34:45
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-11 17:17:12
 $ @FilePath: \node-study-program\07_express\代码\15_generator\routes\users.js
 $*/
const usersRoute = require("express").Router()
usersRoute.get("/",(req,res,next)=>{
    res.send("response with resources")
})
usersRoute.get("/test",(req,res,next)=>{
    res.send("用户测试阶段")
})
module.exports= usersRoute