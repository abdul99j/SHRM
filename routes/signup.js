var express = require('express');
var router = express.Router();
var candidates=require('../models').candidateModel;
var users=require('../models').userModel;
var multer=require('multer');
var path=require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload=multer({storage:storage});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/',async(req,res)=>{
  try{
    if(req.body.email!=''&&req.body.firstName!=''&&req.body.lastName!=''&&req.body.password!=''){
    var newCandidate=await candidates.create({firstName:req.body.firstName,lastName:req.body.lastName,
      Email:req.body.email,Password:req.body.password});
      res.redirect('/login');
    }
    else{
      res.send('errror');
    }
  }
  catch(e){
    console.log(e);
  }
});

router.get('/employee',async(req,res)=>{
  res.render('employeeSignup');
});

router.post('/employee',upload.single('picture'),async(req,res)=>{
  try{
    var newEmployee=await users.create({isAdmin:true,firstName:req.body.FirstName,lastName:req.body.LastName,
      nic:req.body.CNIC,email:req.body.email,password:req.body.password,fuel:req.body.Fuel,salary:req.body.Salary,
      designation:req.body.designation,Department:req.body.department,healthInsurance:req.body.Insurance,
      benificiaries:req.body.numberins,pic_location:req.file.path,DOB:req.body.DOB
    });
    res.redirect('login');
  }
  catch(e){
    console.log(e);

  }
})


module.exports = router;