var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors')

// var corsOption = {
//   origin: 'http://localhost:3001'
// }
var corsOption = {}

app.use(cors(corsOption))

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tvvmvn:H8NiU8pVY2XRRy1m@cluster0.eho7r.mongodb.net/test?retryWrites=true&w=majority');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
