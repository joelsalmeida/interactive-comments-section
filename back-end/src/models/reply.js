const reply = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    userId: { foreignKey: true, field: 'user_id', type: DataTypes.INTEGER, allowNull: false },
    repliesToUser: { foreignKey: true, field: 'replies_to_user', type: DataTypes.INTEGER, allowNull: false },
    repliesToComment: { foreignKey: true, field: 'replies_to_comment', type: DataTypes.INTEGER, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    score: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  }, { tableName: 'Replies', underscored: true, timestamps: false });

  Reply.associate = (models) => {
    Reply.belongsTo(models.User, 
    { foreignKey: 'user_id', as: 'user' });

    Reply.belongsTo(models.User, 
      { foreignKey: 'replies_to_user', as: 'to_user' });

    Reply.belongsTo(models.Comment, 
    { foreignKey: 'replies_to_comment', as: 'to_comment' });
  };

  return Reply;
};

module.exports = reply;