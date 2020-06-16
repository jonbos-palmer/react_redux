const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    // could be node
    target: "web",
    // allows access to source code in browser debug
    devtool: "cheap-module-source-map",
    // where do we want
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        // non-verbose
        stats: "minimal",
        // overlay errors
        overlay: true,
        // all reqs sent to index.html
        historyApiFallback: true,
        // CHROME ISSUE
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico",
        }),
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};