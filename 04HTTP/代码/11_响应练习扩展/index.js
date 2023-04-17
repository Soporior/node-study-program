/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 09:38:20
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 10:20:18
 $ @FilePath: \node-study-program\04HTTP\代码\11_响应练习扩展\index.js
 $*/
const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=>{
  const url =  new URL(req.url,"http://127.0.0.1/");
  console.log(url.searchParams);
//   res.setHeader('Content-Type','text/html;charset=utf8')

switch (url.pathname){
         case "/" :
        fs.readFile("./index.html",(err,data)=>{
            if(err){
                res.end("请求失败")
                return
            }
            res.end(data)
          })
    break;
    case "/index.css":
        fs.readFile("./index.css",(err,data)=>{
            if(err){
                res.end("请求失败")
                return
            }
            res.end(data)
          })
          break;
          default:
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>')
}
 
 
})

server.listen(8080)