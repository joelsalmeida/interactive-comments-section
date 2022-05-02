'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Replies', {
      id: { primaryKey: true, autoIncrement: true, allowNull: false, type: Sequelize.INTEGER },
      userId: {
        field: 'user_id', type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      replyingToUser: {
        field: 'replies_to_user', type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      replyingToComment: {
        field: 'replies_to_comment', type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'Comments', key: 'id' }
      },
      content: { type: Sequelize.STRING, allowNull: false },
      createdAt: {field: 'created_at', type: Sequelize.DATEONLY, allowNull: false},
      score: { type: Sequelize.INTEGER, allowNull: false},
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Replies');
  },
};
