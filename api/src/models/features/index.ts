import { Sequelize } from "sequelize";

const { DataTypes} = require("sequelize");

module.exports = (sequelize:Sequelize) => {
    return sequelize.define('Features', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};