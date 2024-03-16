const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {},
    output: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets/images', to: './src/assets/images' }
            ]
        })
    ],
    devServer: {
        compress: true,
        port: 9000
    }
};
