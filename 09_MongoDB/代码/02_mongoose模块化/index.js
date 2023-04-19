/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 13:43:39
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 14:26:34
 $ @FilePath: \node-study-program\09_MongoDB\代码\02_mongoose模块化\index.js
 $*/
const db = require("./db/db.js")

//导入 mongoose
const mongoose = require('mongoose');
//导入 BookModel
const BookModel = require('./models/BookModel');
const success = () => {
    BookModel.create({
        name: "gold bottle and plum",
        author: "someone",
        price: 5,

    }).then(res => {
        console.log(res);
    })
}

const error = () => {

}
db(success, error)