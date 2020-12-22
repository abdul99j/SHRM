var express = require('express');
var jobOpening=require('../models/jobOpening');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    var jobopenings=await jobOpening.findAll();
    console.log(jobOpening);
  }
  catch{
    console.log("CANT FIND JOB OPENINGS");

  }
});

module.exports=router;