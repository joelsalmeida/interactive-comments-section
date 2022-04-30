const { User } = require('../models');

const create = async (userName, imagePng, imageWebp) => {
  try {
    return await User.create({ userName, imagePng, imageWebp });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
