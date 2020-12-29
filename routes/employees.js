var express = require('express');
var router = express.Router();
var employees=require('../models').userModel;

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const employee=await employees.findAll();
    console.log(employee);  
    res.render('employees',{employee:employee});
  }
  catch(e){
    console.log(e);
  }
});
router.get('/:id',async(req,res)=>{
  console.log(req.params.id);
  var employes=await employees.findOne({
    where:{
      email:req.params.id
    }
  });
  console.log(employes);
  res.render('empdetails',{employee:employes})
})



module.exports = router;