'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "billy",
        firstName: "Bill",
        lastName: "Preston",
        password: "excellent",
        profilePicture: "https://i.imgur.com/9MRpC32.png"
      },
      {
        username: "teddy",
        firstName: "Theodore",
        lastName: "Logan",
        password: "whoa",
        profilePicture: "https://i.imgur.com/gA53SuX.png"
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
