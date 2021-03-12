'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "billy",
        firstName: "Bill",
        lastName: "Preston",
        password: "excellent"
      },
      {
        username: "teddy",
        firstName: "Theodore",
        lastName: "Logan",
        password: "whoa"
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
