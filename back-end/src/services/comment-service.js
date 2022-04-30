const { Comment } = require('../models');

const create = async (userId, content) => {
  try {
    return await Comment.create({ userId, content });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
