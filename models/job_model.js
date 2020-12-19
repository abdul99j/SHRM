const sequelize=require('./db');

const jobOpening=sequelize.define('jobOpening',{
    jobTitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    jobDescription:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postedOn:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }    
}
);
