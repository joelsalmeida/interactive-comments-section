'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      userName: { field: 'user_name', type: Sequelize.STRING, allowNull: false },
      imagePng: { field: 'image_png', type: Sequelize.STRING, allowNull: false },
      imageWebp: { field: 'image_webp', type: Sequelize.STRING, allowNull: false },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
