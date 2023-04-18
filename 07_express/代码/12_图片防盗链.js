/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 11:02:23
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 11:02:28
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/

/*$$
 $ @Author: lxf
 $ @Date: 2023-04-17 14:53:18
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 10:56:50
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/

const express = require("express")
const app = express()
const fs = require("fs")
//声明中间件
app.use((req, res, next) => {
    const referer = req.get("referer")
    if (referer) {
        //实例化
        let url = new URL(referer);
        //获取 hostname
        let hostname = url.hostname;
        //判断
        if (hostname !== '127.0.0.1') {
            //响应 404 
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next()
})


app.use(express.static(__dirname + "/public"))


app.listen(3000, () => {
    console.log("启动3000 端口");
})