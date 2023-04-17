/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 16:35:43
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 16:54:06
 $ @FilePath: \node-study-program\03_path模块\index.js
 $*/
const fs =require("fs")
const {resolve,parse} = require("path")
const path = require("path")
// 写入文件
// fs.writeFileSync(__dirname+"/index.html","test")

//C:\Users\soporior\Desktop\studyDemo\node-study-program\03_path模块/index.html
// console.log(__dirname+"/index.html");


// 解决分隔符 "\" 的问题
// C:\Users\soporior\Desktop\studyDemo\node-study-program\03_path模块\index.html
console.log(resolve(__dirname+"/index.html"));

// sep 分隔符
// console.log(path.sep); // windows  \  Linux  /


// parse 方法  __dirname  '全局变量'
// console.log(__filename); // 文件的绝对路径

let str = 'D:\\nodeJS\\13-path\\代码\\path.js';
console.log(parse(str));

// basename
console.log(path.basename(str));

// dirname
console.log(path.dirname(str));

// extname
console.log(path.extname(str));

