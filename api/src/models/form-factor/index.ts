import { Sequelize } from "sequelize";

const { DataTypes} = require("sequelize");

module.exports = (sequelize:Sequelize) => {
    return sequelize.define('form_factor', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};