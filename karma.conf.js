/* eslint-env node */

const webpack_config = require('./webpack.config.dist.js');
webpack_config.externals = {
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
  'react/addons': true,
};

function karmaconfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/screens/Highcharts/SolidGauge/test.js',
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: webpack_config,

    webpackServer: {
      noInfo: true,
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
    ],


    babelPreprocessor: {
      options: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
}

module.exports = karmaconfig;
