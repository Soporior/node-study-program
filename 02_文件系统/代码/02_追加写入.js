/*$$
 $ @Author: lxf
 $ @Date: 2023-03-29 14:19:53
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:19:58
 $ @FilePath: \node-study-program\02_文件系统\代码\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-03-17 14:35:45
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-29 14:19:10
 $ @FilePath: \node-study-program\02_文件系统\代码\index.js
 $*/

//追加写入
const fs =require('fs')
fs.appendFile('../data/text.txt',"\n追加内容",(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data);
})