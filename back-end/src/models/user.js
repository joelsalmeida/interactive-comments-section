const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: { field: 'user_name', type: DataTypes.STRING, allowNull: false },
    imagePng: { field: 'image_png', type: DataTypes.STRING, unique: true, allowNull: false },
    imageWebp: { field: 'image_webp', type: DataTypes.STRING, unique: true, allowNull: false },
  }, { tableName: 'Users', underscored: true, timestamps: false });

  return User;
};

module.exports = user;