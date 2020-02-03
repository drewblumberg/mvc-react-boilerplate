var config = require('./webpack.config');
config.mode = 'development';
config.optimization.minimize = false;
config.output.filename = '[name].js';

module.exports = config;