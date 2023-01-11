const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gerente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('users', [{
      name: 'Larissa Vieira',
      username: 'larissavieira',
      email: 'larissavieira@gmail.com',
      password: bcrypt.hashSync("Maria2018", 10),
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
