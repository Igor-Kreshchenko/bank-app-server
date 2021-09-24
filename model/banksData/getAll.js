const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const banks = JSON.parse(data);
    return banks;
  } catch (error) {
    throw error;
  }
};

module.exports = getAll;
