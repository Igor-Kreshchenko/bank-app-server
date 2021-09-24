const updatebanks = require("./updatebanks");
const getAll = require("./getAll");

const del = async (id) => {
  try {
    const banks = await getAll();
    const idx = banks.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    const newbanks = banks.filter((item) => item.id !== id);
    // const delbank = banks.splice(idx, 1);
    await updatebanks(newbanks);
    return banks[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
