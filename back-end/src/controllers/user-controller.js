const service = require('../services/user-service');

const create = async (req, res) => {
  const { userName, imagePng, imageWebp } = req.body;
  
  try {
    const user = await service.create(userName, imagePng, imageWebp);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
