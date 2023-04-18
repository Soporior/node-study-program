/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 16:01:52
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 16:01:57
 $ @FilePath: \node-study-program\07_express\代码\index copy 2.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")
const bodyParser = require("body-parser")



app.get("/", (req, res) => {
    console.log(req.method);
    console.log(req.httpVersion);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.ip);
    console.log(req.get("host"));
    res.end("hello there")
})




app.listen(3000, () => {
    console.log("启动3000 端口");
})


