/*$$
 $ @Author: lxf
 $ @Date: 2023-03-30 16:29:50
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-03-30 16:37:09
 $ @FilePath: \node-study-program\05_模块化\代码\02_模块暴露数据\me.js
 $*/
function massage(){
    console.log("Im in massage~~~~");
}
function relax(){
    console.log("Im in vacation~~~~");
}
//第一种
module.exports={
    massage,
    relax
}

// 第二种
exports.massage = massage
exports.relax = relax


//1. module.exports 可以暴露`任意`数据
// module.exports = 'iloveyou';
// module.exports = 521;


//2. 不能使用 `exports = value`的形式暴露数据
// exports = 'iloveyou' // X


// exports = module.exports = {}
// console.log(module.exports);
// console.log(module.exports === exports);

exports = module.exports = {massage}
exports.massage = massage;
// exports = 'iloveyou' // X
