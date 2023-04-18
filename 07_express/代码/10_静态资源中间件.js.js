/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 10:41:43
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:41:47
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:36:12
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => {

    res.send("hello")

})





app.listen(3000, () => {
    console.log("启动3000 端口");
})