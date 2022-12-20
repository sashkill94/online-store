const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            { test: /\.ts$/i, use: 'ts-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                  {
                    loader: "sass-resources-loader",
                    options: {
                      resources: [path.join(__dirname, "src", "common", "vars.scss")],
                    },
                  },
                ],
              },
            {
                test: /\.(ico|jpg|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: "/",
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            publicPath: '/',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
        new MiniCssExtractPlugin({
        }),
        new NetlifyPlugin({
            redirects: [
              {
                from: "/*",
                to: "/index.html",
                status: 200,
              }
            ]
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
