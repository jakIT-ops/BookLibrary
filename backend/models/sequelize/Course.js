module.exports = function(sequelize, DataTypes) {
    return sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        tailbar: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, 
    {
        tableName: 'courses',
    }
    );
};