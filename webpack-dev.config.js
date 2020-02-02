var config = require('./webpack.config');
config.mode = 'development';
config.optimization.minimize = false;
config.output.filename = 'bundle.js';

module.exports = config;