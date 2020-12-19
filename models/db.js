const { RequestTimeout } = require('http-errors');
const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('databse','login','password',{
    dialect:'mssql',
    host:'localhost',
    dialectOptions:{
        instanceName:'SQLEXPRESS',
        requestTimeout:30000,
        "options": {
            validateBulkLoadParameters: true
            }
    },
    pool:{
        max:50,
        min:0,
        idle:10000
    }
})


sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });