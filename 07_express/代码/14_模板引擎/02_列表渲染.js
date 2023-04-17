/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 11:30:38
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-11 11:30:42
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 10:20:03
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-11 10:53:21
 $ @FilePath: \node-study-program\07_express\代码\index.js
 $*/
/*
 * @Author: lxf
 * @Date: 2023-04-11 10:20:03
 * @LastEditors: lxf
 * @LastEditTime: 2023-04-11 10:20:12
 * @FilePath: \node-study-program\07_express\代码\index
 */
const ejs = require("ejs")
const fs = require("fs")
const xiyou =["wukong","sanzang",'wujing']
let str = fs.readFileSync("./02_西游.html").toString()
let result = ejs.render(str,{xiyou})
console.log(result);
