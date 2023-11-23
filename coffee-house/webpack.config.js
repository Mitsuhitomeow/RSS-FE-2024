const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const config = {
    mode: env.mode ?? 'development',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.js'),
      menu: path.resolve(__dirname, 'src', 'menu.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
      assetModuleFilename: 'assets/img/[name][ext]'
    },
    devtool: 'source-map',
    devServer: isDev
      ? {
        port: 3001,
        open: true
      }
      : undefined,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html',
        inject: 'body',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'menu.html'),
        filename: 'menu.html',
        inject: 'body',
        chunks: ['menu']
      }),
      new MiniCssExtractPlugin({
        filename: './css/[name].[contenthash:8].css',
        chunkFilename: './css/[name].[contenthash:8].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isProd
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ]
        },
        {
          test: /\.ttf$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]'
          }
        },
        {
          test: /\.png$/i,
          type: 'asset/resource'
        },
        {
          test: /\.json$/i,
          type: 'asset/resource',
          generator: {
            filename: 'scripts/[name][ext]'
          }
        },
        {
          test: /\.svg$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/icon/[name][ext]'
          }
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
      ]
    }
  }

  return config;
}