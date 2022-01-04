"use strict";
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Admins",
      [
        {
          id: 1,
          firstName: "Daniel",
          lastName: "Rodriguez",
          email: "dan@dan.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Admin",
          lastName: "Admin",
          email: "admin@admin.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
