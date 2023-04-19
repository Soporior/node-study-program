/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 13:21:34
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 13:26:10
 $ @FilePath: \node-study-program\09_MongoDB\代码\02_mongoose模块化\models\BookModel.js
 $*/
const BaseModel = require("./BASEMODELER.js")
module.exports = BaseModel("books", {
    name: String,
    author: String,
    price: Number
})