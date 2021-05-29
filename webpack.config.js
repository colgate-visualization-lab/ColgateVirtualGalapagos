const path = require("path");
// const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "eval-cheap-module-source-map",
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets/"),
      components: path.resolve(__dirname, "./src/components/"),
      api: path.resolve(__dirname, "./src/api/"),
      contexts: path.resolve(__dirname, "./src/contexts/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      slices: path.resolve(__dirname, "./src/slices/"),
      theme: path.resolve(__dirname, "./src/theme/"),
      utils: path.resolve(__dirname, "./src/utils/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // indent: "postcss",
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/inline",
        // loader: "url-loader?name=images/[name].[ext]",
      },
      {
        test: /\.(mp4|mp3)$/,
        type: "asset/resource",
        // loader: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
};
