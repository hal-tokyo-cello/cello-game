const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

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
        use: ["vue-style-loader", "css-loader"],
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
    primevue: "primevue",
    vue: "Vue",
    "vue-router": "VueRouter",
  },
});
