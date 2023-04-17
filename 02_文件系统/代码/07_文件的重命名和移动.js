/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 14:57:39
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:57:44
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-03-17 14:35:45
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:56:54
 $ @FilePath: \node-study-program\02_文件系统\代码\index.js
 $*/

const fs =require("fs")
// 重命名
// fs.rename('../data/DCH_9867(2).JPG','../data/DCH_9867(2).jpg',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("移动成功");
    
// })
//移动
fs.rename('../data/DCH_9867(2).JPG','./DCH_9867(2).jpg',(err)=>{
    if(err){
        console.log(err);
    return
    }
    console.log("移动成功");
    
})