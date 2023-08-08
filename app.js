var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors')
require('dotenv').config()

// var corsOption = {
//   origin: 'http://localhost:3001'
// }
var corsOption = {}

app.use(cors(corsOption))

// getting-started.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://tvvmvn:H8NiU8pVY2XRRy1m@cluster0.eho7r.mongodb.net/test?retryWrites=true&w=majority'
const dev_db_url = 'mongodb://localhost:27017/test'
/*
The *process* core module of Node.js provides the env property 
which hosts all the environment variables that were set at the moment 
the process was started.
*/

console.log(process.env.NODE_ENV)

async function main() {
  await mongoose.connect(mongoURI);
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
