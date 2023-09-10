'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', [
      {
        name: 'Mesas',
      },
      {
        name: 'Sillas',
      },
      {
        name: 'Vajillas',
      },
      {
        name: 'Otra',
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});

  }
};
