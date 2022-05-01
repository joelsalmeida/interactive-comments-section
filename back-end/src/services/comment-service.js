const { Comment, User } = require('../models');

const create = async (userId, content) => {
  try {
    return await Comment.create({ userId, content });
  } catch (error) {
    console.log(error);
  }
};

const get = async () => {
  try {
    return await Comment.findAll({ include: [{ model: User, as: 'user' }] });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, get };
