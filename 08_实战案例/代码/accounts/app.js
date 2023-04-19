var createError = require('http-errors');
var express = require('express');
const fs = require("fs")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //打印日志

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const stream = fs.createWriteStream(path.join(__dirname, "public", "access.log"), { flags: "a" })// a 追加，w 删除后再写，默认为w
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger("dev", { stream: stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler   app.use按照书写顺序运行,将error handler写在最后
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');//ejs语法  默认把res传进去了
});

module.exports = app;
