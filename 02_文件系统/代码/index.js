
const fs =require("fs")
// 相对路径
fs.writeFileSync("index.html","哈哈")
fs.writeFileSync("./index.html","哈哈")
fs.writeFileSync("../index.html","哈哈")

//绝对路径
// fs.writeFileSync('D:/index.html', 'love');
fs.writeFileSync('/index.html', 'love');//根目录

// fs.writeFileSync('d:/index.html', 'love');
