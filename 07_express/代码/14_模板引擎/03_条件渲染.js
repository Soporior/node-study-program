
const ejs = require("ejs")
const fs = require("fs")

let isLogin  = false



let str = fs.readFileSync("./03_home.html").toString()
let result = ejs.render(str,{isLogin})
console.log(result);
