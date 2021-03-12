'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Trips', [
      {
        name: "US trip",
        startDate: "1/1/2016",
        endDate: "1/14/2016",
        destination: "US",
        userId: 1
      },
      {
        name: "UK trip",
        startDate: "1/1/2017",
        endDate: "1/14/2017",
        destination: "UK",
        userId: 1
      },
      {
        name: "Germany trip",  
        startDate: "1/1/2018",
        endDate: "1/14/2018",
        destination: "Germany",
        userId: 2
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Trips', null, {});
  }
};
