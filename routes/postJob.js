var express = require('express');
var jobOpening=require('../models/jobOpening');
var router = express.Router();


router.get('/',async(req,res,next)=>{
    res.render('postJob');
    
});
router.post('/',async(req,res)=>{
    try{
        var newJob=await jobOpening.create({jobTitle:req.params.jobTitle,jobDescrition:req.params.jobDescrition});
        console.log("SUCCESSFULLY CREATED");
    }
    catch{
        res.redirect('error');
    }
});
module.exports=router;