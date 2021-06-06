const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "/dist",
    port: 8080,
    historyApiFallback: true,
    compress: true,
    clientLogLevel: "silent",
    inline: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.less)$/,
        loaders: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              minimize: true,
              localIdentName: "[local]_[hash:base64:5]",
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "/dist/" + "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "/dist/" + "media/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin("版权归vincent所有,翻版必究"),
    new HtmlWebpackPlugin({
      template: "./src/index.tmpl.html",
    }),
  ],
};
