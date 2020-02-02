const path = require('path');

  module.exports = {
    entry: './Scripts/global.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.min.js',
      path: path.resolve(__dirname, 'wwwroot/js/'),
    },
    optimization: {
        minimize: true,
    },
    mode: "production"
  };