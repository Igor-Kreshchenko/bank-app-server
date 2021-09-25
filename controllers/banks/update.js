const { Bank } = require("../../model");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Bank.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
