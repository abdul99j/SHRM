const sequelize=require('./db');

const Candidate=sequelize.define('Candidate',{
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey=true
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false
    },
       
}
);
