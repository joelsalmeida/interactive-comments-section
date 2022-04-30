const { Reply } = require('../models');

const create = async (userId, content, repliesToUser, repliesToComment) => {
  try {
    return await Reply.create({ userId, content, repliesToUser, repliesToComment });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
