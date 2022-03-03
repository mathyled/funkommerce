import { Sequelize } from "sequelize";

const { DataTypes} = require("sequelize");

module.exports = (sequelize:Sequelize) => {
    return sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
       number: {
           type: DataTypes.STRING,
           allowNull:false
       }
    });
};