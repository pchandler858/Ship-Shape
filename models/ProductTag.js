const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true, // uses auto increment
    },
    product_id: {
      type: DataTypes.INTEGER, // integer
      references: {
        model: "product", // references the product model
        key: "id", // references the id of the product
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // integer
      references: {
        model: "tag", // references the tag model
        key: "id", // references the id of the tag
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
