// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true, // uses auto increment
    },
    product_name: {
      type: DataTypes.STRING, // string
      allowNull: false, // doesn't allow null values
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // decimal
      allowNull: false, // doesn't allow null values
      validate: {
        isDecimal: true, // checks for decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      defaultValue: 10, // set a default value of 10
      validate: {
        isNumeric: true, // checks for numeric values
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // integer
      references: {
        model: "category", // references the category model
        key: "id", // references the id of the category
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
