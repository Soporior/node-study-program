/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 16:01:31
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 16:05:40
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\06_提取url中的路径和查询字符串 .js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 10:28:23
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 16:01:28
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\index.js
 $*/
 const fs =require("fs")
 const http = require("http")
 const path = require('path');

 //1. 导入 url 模块
const url = require('url');

 const server = http.createServer((req, res) => {
    // response.end('Hello HTTP'); //设置响应体
    res.setHeader('content-type', 'text/html;charset=utf-8');

    let urlAddress = url.parse(req.url, true);
    const pathname = urlAddress.pathname
    
    if(pathname == "/index.html"){
       res.end( fs.readFileSync(path.resolve(__dirname+"/02_form.html")))
    return
    }else{
        // console.log(req.method) 
        // console.log(req.headers.host)
        // console.log(req.url)
        // console.log(req.httpVersion)
        console.log(urlAddress.pathname);
        console.log(urlAddress.query.a);
    }
    res.end("hello world")
})
server.listen(8080, () => {
    console.log("启动了");
})