const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { EnvironmentPlugin } = require("webpack");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/main.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "https://cdn.cellolearn.net/",
  },
  plugins: [
    new EnvironmentPlugin(["CELLO_API_SERVER"]),
    new HtmlWebpackPlugin({
      title: "CELLO",
      filename: "[name].html",
      template: "template.html",
      scriptLoading: "defer",
      favicon: "./favicon.ico",
      meta: {
        viewport: "width=device-width, initial-scale=1.0",
        author: "hal-tokyo-cello",
        description: "",
        keywords: [].join(","),
      },
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json",
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /prime(vue|icons).+\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /prime(vue|icons).+\.css$/,
        use: ["ignore-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
        dependency: { not: ["url"] },
        type: "javascript/auto",
      },
      {
        test: /\.(eot|woff|ttf)$/,
        use: ["ignore-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".ts", ".js", ".css"],
  },
  target: "web",
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter",
  },
});
