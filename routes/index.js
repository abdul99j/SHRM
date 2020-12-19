var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var title="LMAO";
  res.render('index',{});
});

module.exports = router;
