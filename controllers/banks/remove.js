const banksOperations = require("../../model/banksData");

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBank = await banksOperations.del(id);

    if (!deleteBank) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({ deleteBank });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
