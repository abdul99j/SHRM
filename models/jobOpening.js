
module.exports=(sequelize,Sequelize)=>{
    var jobOpening=sequelize.define('JobOpening',{
    jobTitle:{
        type:Sequelize.STRING,
        allowNull:false
    },
    jobDescription:{
        type:Sequelize.STRING(1200),
        allowNull:false
    },
    
    });
    
    return jobOpening;
};


