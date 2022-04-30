const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: { foreignKey: true, field: 'user_id', type: DataTypes.INTEGER, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    score: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  }, { tableName: 'Comments', underscored: true, timestamps: false });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, 
    { foreignKey: 'user_id', as: 'user' });

    Comment.hasMany(models.Reply, 
    { foreignKey: 'replies_to_comment', as: 'replies' });
  };

  return Comment;
};

module.exports = comment;