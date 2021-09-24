const { Bank } = require("../../model");

const add = async (req, res, next) => {
  try {
    const result = await Bank.create(req.body);

    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
