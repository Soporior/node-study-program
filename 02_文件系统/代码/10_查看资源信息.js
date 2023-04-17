/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 16:27:39
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 16:27:44
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/

const fs =require("fs")
//2. stat 方法  status 缩写 状态
fs.stat('../data/text.txt', (err, data) => {
    if(err){
      console.log('操作失败');
      return;
    }
    console.log(data);
    // isFile 
    console.log(data.isFile());
    // isDirectory
    console.log(data.isDirectory());
  
  });