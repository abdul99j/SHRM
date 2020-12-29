var express = require('express');
var jobOpening=require('../models').jobOpening;
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var jobOpenings=await jobOpening.findAll();
  console.log(jobOpenings);
  res.render('jobopening',{jobopenings:jobOpenings});
});

router.get('/:id',async(req,res)=>{
  try{
    console.log("REQUEST ID"+parseInt(req.params.id));
    var jobopening=await jobOpening.findOne({
      where: {
        id:parseInt(req.params.id)
      }
    });
    res.render('jobDetail',{job_opening:jobopening});
  }
  catch(e){
    console.log(e);
    res.render('jobDetail',{error:'Resource Not Found'});
  }
});



module.exports=router;