const service = require('../services/reply-service');

const create = async (req, res) => {
  const { userId, content, repliesToUser, repliesToComment } = req.body;

  try {
    const reply = await service.create(userId, content, repliesToUser, repliesToComment);
    return res.status(201).json(reply);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
