const updatebanks = require("./updatebanks");
const getAll = require("./getAll");

const update = async (id, updateInfo) => {
  try {
    const banks = await getAll();
    const idx = banks.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    banks[idx] = { ...banks[idx], ...updateInfo };
    // {id: "767580d5-f509-4f45-98f9-28e74ec4af66", "name": "Ground almonds", "price": 3, "location": "Home baking", price: 2}
    await updatebanks(banks);
    return banks[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
