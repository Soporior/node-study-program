/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 10:29:07
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-11 10:29:11
 $ @FilePath: \node-study-program\07_express\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 10:20:03
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-11 10:27:19
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
const country = "zhongguo"
const weather = "today is sunny day~~~"
let str = fs.readFileSync("./01_html.html").toString()
let result = ejs.render(str,{country,weather})
console.log(result);