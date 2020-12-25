var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var path = require("path");
const config = require("../config");

const sequelize = new Sequelize('shrm','postgres','123456',{
    host:config.postgresUrl,
    dialect:'postgres',
    port:5432,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },

});

var db={};

db.attendance=require('./attendance')(sequelize,Sequelize);
db.candidateModel=require('./candidateModel')(sequelize,Sequelize);
db.jobApplications=require('./jobApplications')(sequelize,Sequelize);
db.jobOpening=require('./jobOpening')(sequelize,Sequelize);
db.userModel=require('./userModel')(sequelize,Sequelize);

db.attendance.belongsTo(db.userModel);
db.userModel.hasMany(db.attendance);
db.jobApplications.belongsTo(db.jobOpening);
db.jobOpening.hasMany(db.jobApplications);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports=db;