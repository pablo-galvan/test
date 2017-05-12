'use strict';

let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

let plugins = [
    new ExtractTextPlugin('/css/[name].css'),
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

module.exports = {
    context: path.join(__dirname, '/client'),
    devtool: process.env.MODE != 'dev' ? 'cheap-module-source-map' : 'source-map',
    entry: './index.js',
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-runtime', ],
            }
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
        alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
    },
    output: {
        path: __dirname + '/public',
        filename: './static/[name].min.js'
    },
    plugins: plugins
};
