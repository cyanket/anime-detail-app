const webpackConfig = require('./webpack.config.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Add the VueLoaderPlugin to the webpack configuration
webpackConfig.plugins = [
  new VueLoaderPlugin()
];

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'tests/**/*.spec.js'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
