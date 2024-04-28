const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "app", "static"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
