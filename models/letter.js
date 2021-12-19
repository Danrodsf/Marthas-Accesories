"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Letter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CustomProduct, {
        foreignKey: "letterId",
      });
    }
  }
  Letter.init(
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
      modelName: "Letter",
    }
  );
  return Letter;
};
