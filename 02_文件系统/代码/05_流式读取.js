/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 14:42:40
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:42:45
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-03-17 14:35:45
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:38:59
 $ @FilePath: \node-study-program\02_文件系统\代码\index.js
 $*/

const fs =require("fs")
//1 创建流式读取对象
const streamReadFile = fs.createReadStream("../data/DCH_9867.JPG")
//2 绑定读取事件 chunk = 65536字节 => 64KB
streamReadFile.on("data",chunk=>{
    console.log(chunk.length);
})
streamReadFile.on("end",()=>{
    console.log("读取完成~~");
})