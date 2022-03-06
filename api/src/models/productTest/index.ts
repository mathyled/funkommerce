import { Sequelize } from "sequelize";

const { DataTypes } = require("sequelize");

module.exports = (sequelize: Sequelize) => {
  return sequelize.define(
    "ProductTest",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      features: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      formFactor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      license: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT(2),
      },
      stock: {
        type: DataTypes.INTEGER,
      }
    },
    { timestamps: false }
  );
};
