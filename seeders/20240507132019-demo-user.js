'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
      name: 'John',
      email: 'example@example.com',
      password:'123456',
      adress:"calle ambrosio",
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcos',
      email: 'Marcos@example.com',
      password:'123456',
      adress:"calle yecla",
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'javi',
      email: 'javivi@example.com',
      password:'123456',
      adress:"calle callao",
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'cynthia',
      email: 'cynthonic@example.com',
      password:'123456',
      adress:"calle albalat",
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Elena',
      email: 'elen@example.com',
      password:'123456',
      adress:"calle amorsito",
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
