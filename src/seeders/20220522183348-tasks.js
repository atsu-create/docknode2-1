'use strict';

const db = require('../models/');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          name: 'Write the blog article',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Purchase new laptop PC',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Go to swim',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Order a pizza',
          done: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
