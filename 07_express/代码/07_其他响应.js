/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 10:19:43
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:19:47
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:17:48
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")

app.get("/", (req, res) => {
    //跳转响应
    // res.redirect("http://www.google.com/")
    //下载响应
    // res.download(__dirname + "/02_路由.js")
    //json响应
    // res.json({
    //     name: "你爹",
    //     slogan: "打你屁股"
    // })

    //响应文件内容
    res.sendFile(__dirname + "/02_form.html")



})





app.listen(3000, () => {
    console.log("启动3000 端口");
})