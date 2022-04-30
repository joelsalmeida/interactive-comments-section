'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      content: { type: Sequelize.STRING, allowNull: false },
      createdAt: {field: 'created_at', type: Sequelize.DATE, allowNull: false},
      score: { type: Sequelize.INTEGER, allowNull: false},
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Comments');
  },
};
