"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: "orderId",
      });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
      });
    }
  }
  OrderDetail.init(
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
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
