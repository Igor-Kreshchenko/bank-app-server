const banksOperations = require("../../model/banksData");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bank = await banksOperations.getById(id);

    if (!bank) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({ bank });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
