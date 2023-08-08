var Cat = require('../models/Cat');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const cats = await Cat.find();

  console.log(cats)

  res.json({ cats });
});

module.exports = router;

/*
ngrok

- Description
ngrok exposes local networked services behinds NATs and firewalls 
to the public internet over a secure tunnel. 
Share local websites, build/test webhook consumers and 
self-host personal services.

Detailed help for each command is available with 'ngrok help <command>'.
Open http://localhost:4040 for ngrok's web interface to inspect traffic.
*/