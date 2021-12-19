"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.hasMany(models.OrderDetail, {
        foreignKey: "orderId",
      });
      this.hasMany(models.CustomOrder, {
        foreignKey: "orderId",
      });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ammount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shipping: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "StandBy",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
