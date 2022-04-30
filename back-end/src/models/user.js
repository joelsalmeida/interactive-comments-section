const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: { field: 'user_name', type: DataTypes.STRING, unique: true, allowNull: false },
    imagePng: { field: 'image_png', type: DataTypes.STRING, allowNull: false },
    imageWebp: { field: 'image_webp', type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'Users', underscored: true, timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Comment, 
      { foreignKey: 'user_id', as: 'comments' });
        
    User.hasMany(models.Reply, 
    { foreignKey: 'user_id', as: 'replies' });
  };

  return User;
};

module.exports = user;