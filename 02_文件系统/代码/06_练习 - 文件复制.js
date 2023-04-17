/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 14:48:00
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:52:12
 $ @FilePath: \node-study-program\02_文件系统\代码\06_练习 - 文件复制.js
 $*/

const fs =require("fs")
const file = fs.createReadStream("../data/DCH_9867.JPG")
const copyFile = fs.createWriteStream("../data/DCH_9867(2).JPG")

// file.on("data",chunk=>{
//     chunk && copyFile.write(chunk)
// })
// file.on("end",()=>{
//     copyFile.close()
// })


// 或者使用管道复制
file.pipe(copyFile)