"use strict";
const sequelize = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CustomProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chainId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "chains",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      ballId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "balls",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      letterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "letters",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      chainQt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ballQt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      letterQt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CustomProducts");
  },
};
