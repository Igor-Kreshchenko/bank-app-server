const { Bank } = require("../../model");

const getAll = async (_, res, next) => {
  try {
    const banks = await banksOperations.getAll();
    res.json({ banks });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
