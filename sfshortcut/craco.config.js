// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        main: "./src/index.js",
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: "static/js/[name].js",
      };
      return webpackConfig;
    },
  },
};
