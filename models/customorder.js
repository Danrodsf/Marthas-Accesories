"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: "orderId",
      });
      this.belongsTo(models.CustomProduct, {
        foreignKey: "productId",
      });
    }
  }
  CustomOrder.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CustomOrder",
    }
  );
  return CustomOrder;
};
