'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('categories', [
        {
          name: 'mesas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'sillas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'vajilla',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'otra',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  
  }
};
