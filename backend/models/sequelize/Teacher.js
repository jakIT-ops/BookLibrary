module.exports = function(sequelize, DataTypes) {
    return sequelize.define('teacher', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING(12),
            allowNull: null,
        },

        password: {
            type: DataTypes.STRING(12),
            allowNull: null,
        },

        login_date: {
            type: DataTypes.DATE,
        },

        birth_date: {
            type: DataTypes.DATEONLY,
        },
    }, {
        tableName: 'teacher',
        timestamps: false,
    });
}