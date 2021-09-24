const banksOperations = require("../../model/banksData");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateBank = await banksOperations.update(id, req.body);
    if (!updateBank) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(201).json({ updateBank });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
