// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        main: "./src/index.js",
        background: "./src/background.js",
        content: "./src/content.js",
      };
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: "static/js/[name].js",
      };
      return webpackConfig;
    },
  },
};
