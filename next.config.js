const path = require("path");

module.exports = {
   reactStrictMode: true,
   sassOption: {
      includesPaths: [path.join(__dirname, "styles")],
   },
};
