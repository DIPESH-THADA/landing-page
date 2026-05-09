const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  return {
    entry: './src/ts/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.[contenthash].js',
      clean: true,
      assetModuleFilename: 'assets/[name][ext]'
    },
    resolve: { extensions: ['.ts', '.js'] },
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
        {
          test: /\.scss$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
      new MiniCssExtractPlugin({ filename: 'css/styles.[contenthash].css' }),
      new CopyPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] })
    ],
    devServer: { static: path.resolve(__dirname, 'dist'), port: 3000, hot: true },
    devtool: isDev ? 'source-map' : false
  };
};
