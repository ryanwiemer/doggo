const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const debug = process.env.NODE_ENV !== "production";
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: ['./src/js/scripts.js', './src/scss/style.scss'],
  output: {
    path:  debug ? path.join(__dirname, "build") : path.join(__dirname, "dist"),
    filename: "scripts.min.js"
  },
  resolve: {
    modules:[
      path.resolve(__dirname), path.resolve(__dirname, "node_modules")
    ],
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: debug ? ['css-loader','sass-loader'] :
            [
              {loader: 'css-loader'},
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [autoprefixer('last 2 versions','ie 10')]
                  }
                }
              },
              {loader: 'sass-loader?outputStyle=compressed'}
            ]
        })
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/index.html' }, { from:'src/img', to: 'img' }], { ignore: [ '*.DS_Store' ] }),
    new ExtractTextPlugin('style.min.css'),
    new UglifyJSPlugin()
    ]
};
