const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
// npx webpack serve --config webpack.config.js --open
module.exports = {
  mode: "production",
  entry: "./src/index.js",
 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000
    ,
    open: true
  },
 
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    chunkLoadingGlobal: "myWebpackJsonpCallback",
  },
  performance: { hints: false },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: true,
        parallel: true,
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {
            drop_console: true, // Remove console.log statements
          },
          mangle: true,
          module: false,
          sourceMap: false,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(webp|png|jpe?g|svg|gif|mp4|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
