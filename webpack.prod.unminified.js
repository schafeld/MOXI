const { merge } = require('webpack-merge');
const regularConfig = require('./webpack.config.js');

module.exports = merge(regularConfig, {
  mode: 'production',
  optimization: {
    minimize: false,
  },
});
