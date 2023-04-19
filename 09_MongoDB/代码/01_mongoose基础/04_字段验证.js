/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 10:03:40
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 10:03:46
 $ @FilePath: \node-study-program\09_MongoDB\代码\01_mongoose基础\index copy.js
 $*/
/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 17:26:42
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 10:03:40
 $ @FilePath: \node-study-program\09_MongoDB\代码\01_mongoose基础\index.js
 $*/
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
mongoose.connect("mongodb://127.0.0.1:27017/bilibili")


mongoose.connection.once("open", (...args) => {
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            default: "匿名"
        },
        //类型
        style: {
            type: String,
            enum: ["城市", "长篇"]
        },
        price: Number


    })

    const BookModel = mongoose.model("books", BookSchema)
    BookModel.create({
        name: "li",
        style: "城市"

    }).then((res, rej) => {
        console.log("res", res);
        console.log("rej", rej);
        mongoose.disconnect()
    })

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