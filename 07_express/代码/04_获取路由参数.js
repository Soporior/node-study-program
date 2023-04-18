
const express = require("express")
const app = express()
const fs = require("fs")
const bodyParser = require("body-parser")



app.get("/:id.css", (req, res) => {


    console.log(req.params.id); //12
    console.log(req.url);//  /12.css
    res.end("done")
})




app.listen(3000, () => {
    console.log("启动3000 端口");
})


