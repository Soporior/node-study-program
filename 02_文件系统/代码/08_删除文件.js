/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 15:04:02
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 15:13:47
 $ @FilePath: \node-study-program\02_文件系统\代码\08_删除文件.js
 $*/


const fs =require("fs")
//2. 调用 unlink 方法    unlinkSync
fs.unlink('../data/DCH_9867(2).JPG',(err)=>{
    if(err){
        console.log("删除失败");
        return
    }
    console.log("删除成功")
})
// 调用 rm 方法  14.4   rmSync
fs.rm('../data/DCH_9867(2).JPG',(err)=>{
    if(err){
        console.log("删除失败");
        return
    }
    console.log("删除成功")
})