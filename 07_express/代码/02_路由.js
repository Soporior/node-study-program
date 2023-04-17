/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:59:30
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 14:59:31
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 14:58:26
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()




app.get("/home",(req,res)=>{
    res.end("hello express")
})






app.listen(3000,()=>{
    console.log("启动3000 端口");
})