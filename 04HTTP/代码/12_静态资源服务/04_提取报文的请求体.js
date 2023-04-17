/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 15:06:50
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 15:06:55
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 10:28:23
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 15:01:35
 $ @FilePath: \node-study-program\04HTTP\代码\12_静态资源服务\index.js
 $*/
 const fs =require("fs")
 const http = require("http")
 const path = require('path');
 const server = http.createServer((req, res) => {
    // response.end('Hello HTTP'); //设置响应体
    res.setHeader('content-type', 'text/html;charset=utf-8');

    const url = new URL(req.url , "http://127.0.0.1")
    const pathname = url.pathname
    let body = ""
    req.on("data",chunk=>{
        body+=chunk
    })
    req.on('end', () => {
        console.log(body);
      });
    if(pathname == "/index.html"){
       res.end( fs.readFileSync(path.resolve(__dirname+"/02_form.html")))
    return
    }else{
        console.log(req.method) 
        console.log(req.headers.host)
        console.log(req.url)
        console.log(req.httpVersion)
    }
    res.end("hello world")
})
server.listen(8080, () => {
    console.log("启动了");
})