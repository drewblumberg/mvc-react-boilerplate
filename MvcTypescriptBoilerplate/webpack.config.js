const CleanCss = require('clean-css');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

  module.exports = {
    entry: {
      global: ['babel-polyfill', './Scripts/global.ts'],
      global_styles: ['./Styles/global.scss']
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'wwwroot/js/compiled/'),
    },
    optimization: {
        minimize: true,
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin(
        {
          publicPath: '/wwwroot/css/compiled/',
          filename: '../../../wwwroot/css/compiled/[name].css'
        }),
      new OptimizeCssAssetsPlugin(
        {
            cssProcessor: {
                process: function (input, opts) {
                    const optsTo = opts.to;
                    delete opts.to;

                    const cleanCss = new CleanCss(Object.assign({
                        returnPromise: true,
                        rebaseTo: optsTo
                    }, opts));
                    return cleanCss.minify(input).then(output => ({
                        css: output.styles
                    }));
                }
            },
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ],
    mode: "production"
  };