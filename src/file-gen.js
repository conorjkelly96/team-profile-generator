const fs = require("fs");

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

// exporting modules for external use
module.exports = {
  writeToFile,
};
