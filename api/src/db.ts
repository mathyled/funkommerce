import { Sequelize } from "sequelize";
require("dotenv").config();
const path = require("path");

const { 
  DB_NAME, 
  DB_USER, 
  DB_PASSWORD, 
  HOST 
} = process.env;

const sequelize = new Sequelize(
  DB_NAME || "funkommerce",
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
  require(path.join(__dirname, "/models/category", "index.ts")),
  require(path.join(__dirname, "/models/brand", "index.ts")),
  require(path.join(__dirname, "/models/features", "index.ts")),
  require(path.join(__dirname, "/models/form-factor", "index.ts")),
  require(path.join(__dirname, "/models/license", "index.ts")),
];

models.forEach((model: Function) => model(sequelize));

const { 
  form_factor,
  category, 
  features,
  license,
  product,
  brand
} = sequelize.models;

category.hasMany(product);
product.belongsTo(category);
features.belongsToMany(product, { through: "features_product" });
product.belongsToMany(features, { through: "features_product" });
license.hasMany(product);
product.belongsTo(license);
brand.hasMany(product);
product.belongsTo(brand);
form_factor.hasMany(product);
product.belongsTo(form_factor);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};