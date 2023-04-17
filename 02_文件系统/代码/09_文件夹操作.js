/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 15:21:29
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 15:21:34
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/

const fs =require("fs")
// 1 创建文件夹
// fs.mkdir("../dataCopy",err=>{
//     if(err){
//         console.log("创建失败");
//     return
//     }
//     console.log("创建成功");

// })
// 递归创建文件夹
fs.mkdir("./a/b/c",{recursive:true},err=>{
    if(err){
                console.log("创建失败");
            return
            }
            console.log("创建成功");
})

//读取文件夹
fs.readdir("./a",(err,data)=>{
    if(err){
                console.log("读取失败");
            return
            }
            console.log("读取成功");
            console.log(data);
})
//删除文件夹
fs.rmdir("./a/b/c",(err)=>{
    if(err){
                console.log("删除失败");
            return
            }
            console.log("删除成功");
          
})
//递归删除文件夹 不建议使用
// fs.rmdir("./a", {recursive: true},(err)=>{
//     if(err){
//                 console.log("删除失败");
//             return
//             }
//             console.log("删除成功");
          
// })
// 建议使用
fs.rm("./a", {recursive: true},(err)=>{
    if(err){
                console.log("删除失败");
            return
            }
            console.log("删除成功");
          
})