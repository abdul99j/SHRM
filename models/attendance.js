const sequelize=require('./db');

const Attendance=sequelize.define('Attendance',{
    Status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nic:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Dated:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }    
}
);
