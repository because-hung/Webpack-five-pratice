const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
    //production 上線
    mode: 'development',  //開發
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),  //根目錄 - 輸出檔案要去哪裡
      filename: 'webpack.[hash].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
          },
          {
            test: /\.jpg/,
            type: 'asset/resource'
          }
        ],
      },
      devtool: 'source-map',
      plugins: [
          new HtmlWebpackPlugin({
        template: './layout.html',
      }),
      new MiniCssExtractPlugin({
          filename:'main.[hash].css'
      }),
    ],
  };
  