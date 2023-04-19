/*$$
 $ @Author: lxf
 $ @Date: 2023-04-18 17:26:42
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 10:35:03
 $ @FilePath: \node-study-program\09_MongoDB\代码\01_mongoose基础\index.js
 $*/
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
mongoose.connect("mongodb://127.0.0.1:27017/bilibili")


mongoose.connection.once("open", () => {
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    })

    const BookModel = mongoose.model("books", BookSchema)


    //7. 删除一条
    // BookModel.deleteOne({_id: '63f34af50cf203761ede1892'}, (err, data) => {
    //   //判断
    //   if(err){
    //     console.log('删除失败~~~');
    //     return;
    //   }
    //   //输出 data
    //   console.log(data);
    // });

    BookModel.deleteMany({
        name: 'li'

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