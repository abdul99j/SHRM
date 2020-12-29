var express = require('express');
var jobOpening=require('../models').jobOpening;
var router = express.Router();
var passport=require('passport');

router.get('/',async(req,res,next)=>{
    res.render('postJob');
    
});
router.post('/',async(req,res)=>{
    try{
        if(req.body.jobTitle==''||req.body.jobTitle==''){
            res.render('postJob',{error:'Enter valid details'});
        }
        else {
            var newJob=await jobOpening.create({jobTitle:req.body.jobTitle,jobDescription:req.body.jobDescription});
            res.render('postJob',{success:'Job Posted Succesfully'});
        }
    }
    catch(e){
        console.log(e);
        res.render('postJob',{error:'error while posting job'});
    }
});
module.exports=router;