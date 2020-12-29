var express = require('express');
var db=require('./models');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var models=require("./models");
var routes = require('./routes/index');
var userRouter=require('./routes/users');
var jobOpeningRouter=require('./routes/jobopenings');
var postJobRouter=require('./routes/postJob');
const jobApplicationsRouter = require('./routes/jobapplications');
var loginRouter=require('./routes/login');
var singupRouter=require('./routes/signup');
var employeeRouter=require('./routes/employees');
const passport = require('passport');
var session=require('express-session');





models.sequelize.sync().then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(passport.initialize())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});


app.use('/', routes);
app.use('/user',userRouter);
app.use('/openings',jobOpeningRouter);
app.use('/applications',jobApplicationsRouter);
app.use('/postjob',postJobRouter);
app.use('/login',loginRouter);
app.use('/signup',singupRouter);
app.use('/employees',employeeRouter);
app.use('/login',singupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

 
module.exports = app;