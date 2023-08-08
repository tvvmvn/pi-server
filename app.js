var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors')
require('dotenv').config()

var corsOption = {};

if (process.env.NODE_ENV === 'production') {
  corsOption.origin = 'https://tvvmvn.github.io/pi-client/'
} else {
  corsOption.origin = 'http://localhost:3001'
}

console.log(corsOption)

app.use(cors(corsOption))

const mongoose = require('mongoose');

/*
The *process* core module of Node.js provides the env property 
which hosts all the environment variables that were set 
at the moment the process was started.
*/
console.log(process.env.NODE_ENV)

async function main() {
  let MONGODB_URI;

  if (process.env.NODE_ENV === 'production') {
    MONGODB_URI = process.env.MONGODB_URI
  } else {
    MONGODB_URI = 'mongodb://localhost:27017/test'
  }

  await mongoose.connect(MONGODB_URI);
}

main().catch(err => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


/* 
'https://tvvmvn.github.io/pi-client' that is not equal to the supplied origin. 
Have the server send the header with a valid value, 
or, if an opaque response serves your needs, 
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
*/