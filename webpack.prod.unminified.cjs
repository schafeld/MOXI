const { merge } = require('webpack-merge');
const regularConfig = require('./webpack.config.cjs');

module.exports = merge(regularConfig, {
  mode: 'production',
  optimization: {
    minimize: false,
  },
});
