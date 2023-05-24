'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('GPs', [{
      circuit: 'Monaco',
      laps: 78,
      winner: 'Verstappen',
      constructor: 'Redbull',
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GPs', null, {})
  }
};
