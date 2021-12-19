"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CustomProduct, {
        foreignKey: "ballId",
      });
    }
  }
  Ball.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ball",
    }
  );
  return Ball;
};
