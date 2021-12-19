"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CustomOrder, {
        foreignKey: "productId",
      });
      this.belongsTo(models.Chain, {
        foreignKey: "chainId",
      });
      this.belongsTo(models.Letter, {
        foreignKey: "letterId",
      });
      this.belongsTo(models.Ball, {
        foreignKey: "ballId",
      });
    }
  }
  CustomProduct.init(
    {
      chainId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      letterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ballId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      chainQt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      letterQt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ballQt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CustomProduct",
    }
  );
  return CustomProduct;
};
