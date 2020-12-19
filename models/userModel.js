const sequelize=require('./db');

const User=sequelize.define('User',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
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
    DOB:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    pic_location:{
        type:DataTypes.STRING,
        allowNull:false
    },

}
);
