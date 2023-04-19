/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 13:21:34
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 13:40:34
 $ @FilePath: \node-study-program\09_MongoDB\代码\02_mongoose模块化\models改进\MovieModel.js
 $*/

const BaseModel = require("./BASEMODELER.js")
module.exports = BaseModel("movies", {
    title: String,
    director: String,
})