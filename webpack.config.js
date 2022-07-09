const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/main.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "CELLO",
      filename: "[name].html",
      template: "index.html",
      scriptLoading: "defer",
      // favicon:"",
      // meta: [],
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: [/prime(vue|icons)/],
        use: [
          {
            loader: "vue-loader",
            options: {
              extractCSS: true,
            },
          },
        ],
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
        exclude: [/prime(vue|icons)/],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
      },
      {
        test: /\.(eot|woff|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              emitFile: false,
            },
          },
        ],
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
