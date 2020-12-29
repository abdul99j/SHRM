var express = require('express');
const jobApplications = require('../models').jobApplications;
const jobOpening=require('../models').jobOpening;
var multer=require('multer');
var router = express.Router();

var storage=require('./multerConfig');


const upload=multer({storage:storage});


router.get('/', async function(req, res) {
  try{
    var applications=await jobApplications.findAll();
    console.log(applications);
    res.render('jobApplications',{jobApplications:applications});
  }
  catch(e){
    console.log(e);
  }
});

router.get('/:id',async (req,res)=>{
  var application=await jobApplications.findOne({
    where:{
    id:parseInt(req.params.id)
  }
  });
  console.log("APPLICATION "+application);
  res.render('applicantdetails',{application:application});

});
router.get('/job/:id',async(req,res)=>{
  
})

router.get('/apply/:id',async(req,res)=>{
  try{
    console.log("REQUEST ID"+parseInt(req.params.id));
    var jobopening=await jobOpening.findOne({
      where: {
        id:parseInt(req.params.id)
      }
    });
    res.render('jobApplication',{job_opening:jobopening});
  }
  catch(e){
    console.log(e);
    res.render('jobApplication',{error:'Resource Not Found'});
  }
});
router.post('/apply/:id',upload.single('resume'),async(req,res)=>{
  try{
    var application=await jobApplications.create({email:req.body.email,nic:req.body.cnic,firstName:req.body.firstName,
    lastName:req.body.lastName,Experience:req.body.experience,
    Qualification:req.body.qualification,JobOpeningId:req.params.id,resume_file:req.file.path});
    
    res.render('jobApplication',{success:"APPLIED SUCCESSFULLY"});
    
    
   
  }
  catch(e){
    console.log(req.params.id);
    console.log(e);
    res.render('jobApplication',{error:'Resource Not Found'});
  }
});


module.exports=router;