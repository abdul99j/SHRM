var express = require('express');
var router = express.Router();
var employees=require('../models/userModel');
const { route } = require('./login');
/* GET home page. */
router.get('/', async function(req, res, next) {
  const employees=await employees.findAll();  
  res.render('employees');
});

route.post('/',async (req,res)=>{
    const employee=await employees.create({});

})

module.exports = router;