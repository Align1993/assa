const path = require("path");

module.exports = {
  lintOnSave: false,
  publicPath: "/",
  assetsDir: "",
  filenameHashing: true,
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@imgs": path.resolve(__dirname, "./src/imgs"),
      },
    },
  },
  devServer: {
    port: "8081",
  },
};
