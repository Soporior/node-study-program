/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 14:14:09
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 14:15:38
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\01-创建http服务.js
 $*/
const fs = require("fs")
const http = require("http")
const path = require('path');
const server = http.createServer((req, res) => {
    // response.end('Hello HTTP'); //设置响应体
    response.setHeader('content-type', 'text/html;charset=utf-8');
    res.end("hello world")
})
server.listen(8080, () => {
    console.log("启动了");
})