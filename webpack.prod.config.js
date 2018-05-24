var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.resolve(__dirname, "dist");
const SRC  = path.resolve(__dirname, "src");
const APP  = path.join(SRC, "app");

module.exports = {
    entry: {
        "dist/js/vendor.bundle": "./src/app/vendor.ts",
        "dist/js/main.bundle": "./src/app/main.ts",
    },
    output: {
        path: DIST,
        publicPath: '',
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader?silent=true!angular2-template-loader' },
            { test: /\.(css|html)/, include: SRC, loader: 'raw-loader' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,  use: [
                'file-loader'
              ] },   
            { 
              test: /\.(sass|scss)$/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.html'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(SRC, "index.html")}),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, SRC),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }) 
    ],
    devtool: 'cheap-module-source-map'
}