const buff = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log("buff",buff.toString()); 


const buff_2 = Buffer.from("hello")
console.log("buff_2",buff_2); //buffer对象中字符以16进制显示
console.log("buff_2",buff_2[0]);//读取buffer中的数 读取操作都是十进制 "104"

buff_2[4]  = 104//读取操作都是十进制

console.log("buff_2",buff_2[0].toString(2));//转二进制字符 1101000
console.log("buff_2",buff_2.toString()); //"hellh"

//溢出 舍弃高位
const buff_3 = Buffer.from("hello")
console.log("buff_3",buff_3)
buff_3[0] = 361
console.log("buff_3",buff_3)
console.log("buff_3",buff_3.toString())

//一个字节占八位(8bit) 一个英文字符占一个字节  中文通常占两个字节十六位(16bit)
//一个字节能表示0-255 (0000 0000 - 1111 1111)