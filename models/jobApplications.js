module.exports=(sequelize,Sequelize)=>{
    const JobApplication=sequelize.define('JobApplication',{
        email:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        nic:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        lastName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        Experience:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        Qualification:{
            type:Sequelize.STRING,
            allowNull:false
        },
        resume_file:{
            type:Sequelize.STRING,
            allowNull:false
        },
    });
    
    return JobApplication;

}

