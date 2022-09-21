"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mary",
        lastName: "Doe",
        email: "mary@doe.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Max",
        lastName: "Doe",
        email: "max@doe.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete("Users", null, {});
  },
};
