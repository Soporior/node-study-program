/*$$
 $ @Author: lxf
 $ @Date: 2023-04-19 13:21:34
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-19 13:35:36
 $ @FilePath: \node-study-program\09_MongoDB\代码\02_mongoose模块化\models改进\BaseModel.js
 $*/
const { model, Schema } = require("mongoose")

function RetrunModel(modeName, schemaConfig) {
    //创建文档的结构对象
    //设置集合中 文档的属性以及属性值的类
    const nowSchema = new Schema(schemaConfig)
    //创建模型对象  对文档操作的封装对象
    return model(modeName, nowSchema)


}
module.exports = RetrunModel