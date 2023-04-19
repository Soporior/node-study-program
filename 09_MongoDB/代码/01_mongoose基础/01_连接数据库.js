/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 17:54:51
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 09:22:04
 $ @FilePath: \node-study-program\09_MongoDB\代码\01_mongoose基础\01_连接数据库.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 17:26:42
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-18 17:53:50
 $ @FilePath: \node-study-program\09_MongoDB\代码\01_mongoose基础\index.js
 $*/
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/bilibili")


mongoose.connection.once("open", (...args) => {
    console.log(args);
})


// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});

//  关闭 mongodb 的连接
setTimeout(() => {
    mongoose.disconnect();
}, 2000)