const NODE_ENV = process.env.NODE_ENV || "development";
const DEV_PORT = 8080;
const packageJson = require("./package.json");
const publicPath = `https://localhost:${DEV_PORT}/assets/`; // also for HMR

module.exports = {
  mode: NODE_ENV,
  entry: {
    index: ["./js/main.js"],
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].js",
    libraryTarget: "amd",
    library: packageJson.name,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: __dirname,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    https: true,
    port: DEV_PORT,
    publicPath,
    // key: "./dev.key.pem",
    // cert: "./dev.pem",
    host: "localhost", // 'localhost' HMR debuggable
    historyApiFallback: {
      index: "index.html",
    },
  },
  externals: {},
};