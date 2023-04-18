/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 10:33:10
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:33:14
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:28:12
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")

const middleWareForAll = (req, res, next) => {
    const { url, ip } = req
    fs.appendFileSync(__dirname + "/access.log", `url:${url},ip:${ip}\r\n`)
    next()
}

app.use(middleWareForAll)

app.get("/", (req, res) => {

    res.send("hello")

})





app.listen(3000, () => {
    console.log("启动3000 端口");
})