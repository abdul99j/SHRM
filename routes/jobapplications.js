var express = require('express');
const jobApplications = require('../models/jobApplications');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('jobApplications');
});

module.exports=router;