const getAll = require("./getAll");

const getById = async (id) => {
  try {
    const banks = await getAll();
    const selectBank = banks.find((item) => item.id === id);
    if (!selectBank) {
      return null;
    }
    return selectBank;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
