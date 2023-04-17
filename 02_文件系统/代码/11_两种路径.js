/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 16:32:11
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 16:32:16
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/

const fs =require("fs")
// 相对路径
fs.writeFileSync("index.html","哈哈")
fs.writeFileSync("./index.html","哈哈")
fs.writeFileSync("../index.html","哈哈")

//绝对路径
// fs.writeFileSync('D:/index.html', 'love');
fs.writeFileSync('/index.html', 'love');//根目录

// fs.writeFileSync('d:/index.html', 'love');
