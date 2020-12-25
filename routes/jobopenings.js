var express = require('express');
var jobOpening=require('../models/jobOpening');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('jobOpening');
});


module.exports=router;