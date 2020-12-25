module.exports=(sequelize,Sequelize)=>{
    const JobApplication=sequelize.define('JobApplication',{
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
        },
        nic:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
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
            type:Sequelize.DATEONLY,
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
        coverLetter_file:{
            type:Sequelize.STRING,
            allowNull:true
        }
    
    });
    return JobApplication;

}
