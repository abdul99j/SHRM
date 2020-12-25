
module.exports=(sequelize,Sequelize)=>{
    const Candidate=sequelize.define('Candidate',{
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