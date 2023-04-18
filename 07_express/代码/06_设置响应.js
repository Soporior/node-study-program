/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 09:41:41
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 09:41:45
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 09:41:03
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")

app.get("/res", (req, res) => {
    // 原生响应
    // res.statusCode = 404
    // res.statusMessage = 'msg:404'
    // res.setHeader("1+1", "2")
    // res.write("writeText")
    // res.end("endMsg")

    // express响应
    res.status(211).set("params", ["1", "2", "3"]).send("nihao")
})





app.listen(3000, () => {
    console.log("启动3000 端口");
})