var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var path = require("path");

const sequelize = new Sequelize('shrm','postgres','123456',{
    host:'localhost',
    dialect:'postgres',
    port:5432,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },

});

var db={};
fs.readdirSync(__dirname).filter(function(file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
  var model = require(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
if ("associate" in db[modelName]) {
  db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize.sync();
module.exports=db;