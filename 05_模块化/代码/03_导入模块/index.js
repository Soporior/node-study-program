/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 16:52:02
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 16:55:22
 $ @FilePath: \node-study-program\05_模块化\代码\03_导入模块\index.js
 $*/
const fs = require("fs")
const path = require("path")
const dir = fs.readdirSync(__dirname)
console.log(dir);
dir.forEach(filename=>{
    filename!=="index.js"&& console.log(require(path.resolve(__dirname+"/"+filename)));
})