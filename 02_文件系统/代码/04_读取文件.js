
const fs =require("fs")

// 异步读取
 fs.readFile("../data/text.txt",(err,data)=>{
    if(err){
        console.log(err);

    }
    console.log(data.toString());
})

//同步读取
const data2 = fs.readFileSync("../data/text.txt")
console.log(data2.toString());