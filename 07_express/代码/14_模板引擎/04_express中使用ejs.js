const path = require("path")
const app = require("express")()
app.set("view engine","./node_modules/ejs/ejs.js")
app.set("views",path.resolve(__dirname,'./views'))
app.get('/home',(req,res)=>{

    let titile = "hello amillie"
    res.render('home',{titile})
})
app.listen(8088,()=>{
    console.log("server starting");
})
let isLogin  = false



// let str = fs.readFileSync("./03_home.html").toString()
// let result = ejs.render(str,{isLogin})

