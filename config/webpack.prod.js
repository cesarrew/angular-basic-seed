var AotPlugin = require("@ngtools/webpack").AotPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",

    entry: {
        "polyfills": "./src/polyfills.ts",
        "resources": "./src/resources.ts",
        "app": "./src/main.prod.ts"
    },

    output: {
        path: "dist",
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        rules: [
            { test: /\.ts$/, loader: "@ngtools/webpack" },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)(\?.*$|$)/, loader: "file-loader?name=assets/[name].[hash].[ext]" },
            { test: /\.css$/, exclude: ["src", "app"], loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?sourceMap" }) },
            { test: /\.css$/, include: ["src", "app"], loader: "raw-loader" }
        ]
    },

    plugins: [
        new AotPlugin({
            entryModule: "src/app/app.module#AppModule",
            tsConfigPath: "./tsconfig.json"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "resources", "polyfills"]
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: true
        })
    ]
};