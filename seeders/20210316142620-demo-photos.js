'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Photos', [
      {
        date: "2019-07-19",
        photo: "https://i.imgur.com/9IFJycx.jpg",
        location: "Bruessow, Germany",
        tripId: 1
      },
      {
        date: "2019-07-19",
        photo: "https://i.imgur.com/q0WW64T.jpg",
        location: "Bruessow, Germany",
        tripId: 1
      },
      {
        date: "2019-07-19",
        photo: "https://i.imgur.com/xucxK0U.jpg",
        location: "Pasewalk, Germany",
        tripId: 2
      },
      {
        date: "2019-07-19",
        photo: "https://i.imgur.com/NpUkDRE.jpg",
        location: "Pasewalk, Germany",
        tripId: 2
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/PYZMoJ6.jpg",
        location: "Neuenfeld, Germany",
        tripId: 1
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/JUU8M5O.jpg",
        location: "Neuenfeld, Germany",
        tripId: 2
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/o9yJef5.jpg",
        location: "Jago, Germany",
        tripId: 1
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/GgVeu5q.jpg",
        location: "Kraatz, Germany",
        tripId: 2
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/rWXSNj6.jpg",
        location: "Kraatz, Germany",
        tripId: 1
      },
      {
        date: "2019-07-20",
        photo: "https://i.imgur.com/HN4cSPC.jpg",
        location: "Hamburg, Germany",
        tripId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
