const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');

let ExtractJwt = passportJWT.ExtractJwt;

let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secretKey;


let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    let user = getUser({ id: jwt_payload.id });
  
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });

passport.use(strategy);