module.exports=(sequelize,Sequelize)=>{
    const Attendance=sequelize.define('Attendance',{
        Status:{
            type:Sequelize.STRING,
            allowNull:false
        },
        nic:{
            type:Sequelize.STRING,
            allowNull:false
        },
        Dated:{
            type:Sequelize.DATEONLY,
            allowNull:false
        }    
    }
    );
    return Attendance;
}
