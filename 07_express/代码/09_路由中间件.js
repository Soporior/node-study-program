/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 10:34:56
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:35:01
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:34:09
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")

const middleWare = (req, res, next) => {

    //判断 URL 中是否 code 参数等于 521
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }

}


app.get("/", middleWare, (req, res) => {

    res.send("hello")

})





app.listen(3000, () => {
    console.log("启动3000 端口");
})