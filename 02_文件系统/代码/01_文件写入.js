// readFileSync() //同步读取
// writeFileSync() //同步写入
// exists(path, callback) //exists方法用来判断给定路径是否存在，然后不管结果如何，都会调用回调函数。
// mkdir()，writeFile()，readfile() //新建目录 方法用于写入文件 读取文件内容。
// mkdirSync()，writeFileSync()，readFileSync() //同步上面的方法
// readdir()//读取目录
// stat()//获取文件or目录的具体信息
// watchfile()，unwatchfile()//watchfile方法监听一个文件，如果该文件发生变化，就会自动触发回调函数。
// createReadStream()
// createWriteStream()
//文件写入

const fs = require("fs")
fs.writeFileSync('./data/诗词赋.txt','好诗好诗')
