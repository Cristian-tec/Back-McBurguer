const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('products', {
        /*  uiD:{
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
           primaryKey: true,
         } */
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER
        },
        orders: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        },
        count_type: {
            type: DataTypes.STRING
        }
    },
        {
            timestamps: false,
        }
    );
};
