const banksOperations = require("../../model/banksData");

const add = async (req, res, next) => {
  try {
    const newBank = await banksOperations.add(req.body);

    res.status(201).json({ newBank });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
