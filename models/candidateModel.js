
module.exports=(sequelize,Sequelize)=>{
    const Candidate=sequelize.define('Candidate',{
        firstName:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        lastName:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        Email:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
        },
        Password:{
            type:Sequelize.STRING,
            allowNull:false
        },
    }
    );
    return Candidate;
}


