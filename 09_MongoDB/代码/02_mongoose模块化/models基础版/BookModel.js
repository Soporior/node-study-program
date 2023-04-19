/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 13:21:34
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 13:26:10
 $ @FilePath: \node-study-program\09_MongoDB\代码\02_mongoose模块化\models\BookModel.js
 $*/
const { model, Schema } = require("mongoose")
//创建文档的结构对象
//设置集合中 文档的属性以及属性值的类
const BookSchema = new Schema({
    name: String,
    author: String,
    price: Number
})
//创建模型对象  对文档操作的封装对象
const BookModel = model("books", BookSchema)
module.exports = BookModel