var config = require("./webpack.config");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Define global application variables.
 */
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(false),
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

/**
 * Output configuration for production.
 */
config.output = {
  path: path.resolve("./build"),
  filename: "[name].min.js",
  publicPath: ""
};

/**
 * Add production specific plugins to the common ones.
 */
config.plugins = config.commonPlugins.concat([
  definePlugin,

  /**
   * Extract all css into one file.
   */
  new ExtractTextPlugin("[name].min.css", {
    allChunks: true
  }),

  /**
   * Extract all vendor files into a separate file than the our application files.
   */
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    path: "[name].min.js",
    minChunks: function (module, count) {
      return module.resource && module.resource.indexOf(path.resolve('node_modules')) !== -1;
    }
  }),

  /**
   * Check the occurence of modules and assign respective ids.
   */
  new webpack.optimize.OccurenceOrderPlugin(true),

  /**
   * Deduplicate similar code in the output files.
   */
  new webpack.optimize.DedupePlugin(),

  /**
   * Uglify the end files by following the passed options.
   */
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: false
  }),
]);

/**
 * Export the configuration object.
 */
module.exports = config;
