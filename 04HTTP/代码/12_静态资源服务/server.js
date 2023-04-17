const fs =require("fs")
const http = require("http")
const path = require('path');
//声明一个变量
let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

const server = http.createServer((req,res)=>{
    if(req.method!=="GET"){
        res.statusCode = "404"
        res.end("<h1>Method not allow</h1>")
        return
    }

    const url = new URL(req.url,"http://127.0.0.1")
   const {pathname} = url
   //fullPath C:\Users\soporior\Desktop\studyDemo\node-study-program\04HTTP\代码\12_静态资源服务\page\index.html
   const fullPath = path.resolve(__dirname+pathname)
   const extname = path.extname(fullPath).slice(1)// extname html 文件后缀名
  

      const type = mimes[extname]
      if(type && extname=="html" ){
        res.setHeader("content-type",`${type};charset=uft-8`)
      }else if(type){
        res.setHeader("content-type",type)
      }else{
        //没有匹配到
         res.setHeader('content-type', 'application/octet-stream');
      }
     fs.readFile( fullPath,(err,data)=>{
      if(err){
        console.log(err);
        //设置字符集
        res.setHeader('content-type','text/html;charset=utf-8');
        //判断错误的代号
        switch(err.code){
          case 'ENOENT':
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
          case 'EPERM':
            res.statusCode = 403;
            res.end('<h1>403 Forbidden</h1>');
          default:
            res.statusCode = 500;
            res.end('<h1>Internal Server Error</h1>');
        }
        
        return;
      }
      res.end(data)
     })





})
server.listen(8080,()=>{
  console.log("服务已经启动了");
})