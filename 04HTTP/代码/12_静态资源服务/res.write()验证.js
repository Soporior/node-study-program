/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 13:57:31
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 14:10:01
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\server.js
 $*/


//  ⭐验证res.weite()执行是否会立即传输而不是等到res.end()函数才会一起传输 
// 结果  每次执行 res.write()函数都会传输
 const fs =require("fs")
 const http = require("http")
 const path = require('path');
 const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html;charset=utf-8")
    let count = 0
  const handle = setInterval(() => {
    res.write("love")
    count==1000&&res.end("end")&&clearInterval(handle)
    count++

  }, 1);
 })
 server.listen(8080,()=>{
    console.log("qidongle ");
 })