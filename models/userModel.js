module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define('User',{
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
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
        DOB:{
            type:Sequelize.DATEONLY,
            allowNull:false
        },
        pic_location:{
            type:Sequelize.STRING,
            allowNull:false
        },
    
    }
    );
    return User;
    
}

