import { Sequelize } from "sequelize";

const { DataTypes} = require("sequelize");

module.exports = (sequelize:Sequelize) => {
    return sequelize.define('brand', {
       name: {
           type: DataTypes.STRING,
           allowNull:false
       }
    });
};