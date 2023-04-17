
const fs =require('fs')
const streamWriteObject = fs.createWriteStream("../data/流式写入.text",'utf-8')
streamWriteObject.write("the")
streamWriteObject.write("air")
streamWriteObject.write("is")
streamWriteObject.write("blue")



streamWriteObject.close() //关闭通道

