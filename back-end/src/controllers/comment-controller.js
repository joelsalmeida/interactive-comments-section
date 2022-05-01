const service = require('../services/comment-service');

const create = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const comment = await service.create(userId, content);
    return res.status(201).json(comment);
  } catch (error) {
    console.log(error);
  }
};

const get = async (_req, res) => {
  try {
    const comments = await service.get();
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, get };
