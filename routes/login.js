
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const url=require('url');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('../config');
const userModel=require('../models').userModel;
const { query } = require('express');
const { token } = require('morgan');
const session=require('express-session');
let ExtractJwt = passportJWT.ExtractJwt;

let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secretKey;
var router = express.Router();

let strategy = new JwtStrategy(jwtOptions, async(jwt_payload, next)=> {
    console.log('payload received', jwt_payload);
    let user = await userModel.find({
      where:{
        id:jwt_payload.id
      }
    });
  
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });

passport.use(strategy);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/dashboard');
  } else {
      next();
  }    
};
router.post('/',async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  if(email&&password){
    let user=await userModel.findOne({
      where:{
      email:email
    }});
    if(!user){
      res.render('/login',"User doesn't exists");
    }
    if(user.password==password){
      req.session.user=user.dataValues;
      res.redirect('/employees/'+user.email)
    }
  }
});

module.exports = router;