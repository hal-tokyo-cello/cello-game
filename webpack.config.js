const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/main.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new VueLoaderPlugin()],
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
