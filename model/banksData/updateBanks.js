const fs = require("fs/promises");

const filePath = require("./filePath");

const updateBanks = async (banks) => {
  const banksString = JSON.stringify(banks);
  await fs.writeFile(filePath, banksString);
};

module.exports = updateBanks;
