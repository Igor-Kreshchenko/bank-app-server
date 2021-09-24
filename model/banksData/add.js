const { v4 } = require("uuid");

const getAll = require("./getAll");
const updateBanks = require("./updateBanks");

const add = async (data) => {
  try {
    const newBank = { ...data, id: v4() };
    const banks = await getAll();
    // const newbanks = [...banks, newbank];
    banks.push(newBank);
    await updateBanks(banks);
    return newBank;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
