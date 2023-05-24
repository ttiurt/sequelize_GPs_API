'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('GPs', 'winningCnstrc', { type: Sequelize.STRING });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('GPs', 'winningCnstrc');
  }
};
