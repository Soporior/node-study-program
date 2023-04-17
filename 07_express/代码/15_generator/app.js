/*$$
 $ @Author: lxf
 $ @Date: 2023-04-11 14:01:32
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-04-17 14:02:18
 $ @FilePath: \node-study-program\07_express\代码\15_generator\app.js
 $*/
const express = require("express")
let createError = require('http-errors');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let app =express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));//处理urlencoded => 查询字符串类型 请求体
app.use(express.static(path.resolve(__dirname,"./public")))//请求静态资源
app.use(express.json());//处理json请求体
 
app.use('/',indexRouter)
app.use("/user",usersRouter)
app.use(function(req, res, next) {
    next(createError(404));
  });
  
 

// error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  app.all('*',(req, res) => {
    res.send('<h1>404 Not Found</h1>')
  })

  module.exports= app