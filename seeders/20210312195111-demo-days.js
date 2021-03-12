'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Days', [
      {
        date: "2016-02-03",
        journal: "This is what we did today!",
        tripId: 1
      },
      {
        date: "2016-02-04",
        journal: "This is what we did today2!",
        tripId: 1
      },
      {
        date: "2016-02-05",
        journal: "This is what we did today3!",
        tripId: 1
      },
      {
        date: "2016-02-03",
        journal: "This is what we did today, trip2!",
        tripId: 2
      },
      {
        date: "2016-02-04",
        journal: "This is what we did today2, trip2!",
        tripId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Days', null, {});
  }
};
