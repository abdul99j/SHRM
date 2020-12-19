const { DataTypes } = require('sequelize/types');
const sequelize=require('./db');

const JobApplication=sequelize.define('JobApplication',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    nic:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Experience:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    Qualification:{
        type:DataTypes.STRING,
        allowNull:false
    },
    resume_file:{
        type:DataTypes.STRING,
        allowNull:false
    },
    coverLetter_file:{
        type:DataTypes.STRING,
        allowNull:true
    }

}
);
