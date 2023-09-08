'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('categories', [
        {
          name: 'mesas',
        },
        {
          name: 'sillas',
        },
        {
          name: 'vajilla',
        },
        {
          name: 'otra',
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  
  }
};
