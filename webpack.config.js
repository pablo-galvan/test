'use strict';

let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

let plugins = [
    new ExtractTextPlugin('/css/[name].css'),
    new CopyWebpackPlugin([
        {
            from: './index.html',
            to: './index.html'
        }
    ])
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
];

module.exports = {
    context: path.join(__dirname, '/client'),
    devtool: 'source',
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
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
        alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
    },
    output: {
        path: __dirname + '/public',
        filename: 'static/[name].min.js'
    },
    plugins: plugins
};
