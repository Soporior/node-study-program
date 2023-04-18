
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 15:44:23
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")
const bodyParser = require("body-parser")

//解析 JSON 格式的请求体的中间件
const jsonParser = bodyParser.json()

//解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/", (req, res) => {
    const data = fs.readFileSync("./02_form.html")
    res.end(data)
})
app.post("/postAform", urlencodedParser, (req, res) => {
    // res.end(req)
    // console.log(req.body);
    res.end(req.body.id)
})





app.listen(3000, () => {
    console.log("启动3000 端口");
})