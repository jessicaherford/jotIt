var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./config/db');

var routes = require('./routes/index');
var boards = require('./routes/boards');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if(env === 'development'){
  mongoose.connect('mongodb://localhost/boards_development');
}else{
  mongoose.connect('mongodb://jess:jotit@ds015939.mlab.com:15939/jotit')
}

app.use('/', routes);
app.use('/api', boards);

//CORS thingy
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use(function (req, res) {
    res.sendfile(__dirname + '/views/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// app.use(session({
//   store: new MongoStore({
//     'db': 'boards_development'
//   }),
//   store: new MongoStore({
//     url: process.env.MONGOLAB_URI
//   }),app.use(session({
//   ...
//   // ===== Following 3 lines are trying to connect to local db =====
//   store: new MongoStore({
//     'db': 'boards_development'
//   }),
//   // ===== So, I replaced 3 lines above with following =====
//   store: new MongoStore({
//     url: process.env.MONGOLAB_URI
//   }),

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
