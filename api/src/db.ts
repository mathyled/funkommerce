import { Sequelize } from "sequelize";
require("dotenv").config();
const path = require("path");

const { DB_NAME, DB_USER, DB_PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(
  DB_NAME || "funkommercetest",
  DB_USER || "postgres",
  DB_PASSWORD,
  {
    host: HOST,
    dialect: "postgres",
    logging: false,
  }
);

var models: Function[] = [
  require(path.join(__dirname, "/models/product", "index.ts")),
  require(path.join(__dirname, "/models/productTest", "index.ts")),
  require(path.join(__dirname, "/models/category", "index.ts")),
  require(path.join(__dirname, "/models/brand", "index.ts")),
  require(path.join(__dirname, "/models/features", "index.ts")),
  require(path.join(__dirname, "/models/form-factor", "index.ts")),
  require(path.join(__dirname, "/models/license", "index.ts")),
];

models.forEach((model: Function) => model(sequelize));

const { FormFactor, Category, Features, License, Product, Brand, ProductTest } =
  sequelize.models;

Category.hasMany(Product);
Product.belongsTo(Category);
Features.belongsToMany(Product, { through: "features_product" });
Product.belongsToMany(Features, { through: "features_product" });
License.hasMany(Product);
Product.belongsTo(License);
Brand.hasMany(Product);
Product.belongsTo(Brand);
FormFactor.hasMany(Product);
Product.belongsTo(FormFactor);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
