const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const sourceDir = 'src';
const sourcePath = path.join(process.cwd(), sourceDir);
const clientPath = path.join(sourcePath, 'client');
const clientEntryPath = path.join(clientPath, 'client.js');
const styleEntryPath = path.join(clientPath, '/styles/main.scss');
const outputPath = path.join(process.cwd(), 'build/assets');

const webpackConfig = {
    context: __dirname,
    entry: ['babel-polyfill', clientEntryPath, styleEntryPath],
    output: {
        path: outputPath,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            { test: require.resolve("react"), loader: "expose-loader?React" },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }
        ]
    },
    plugins: [
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Tether: "exports-loader?Tether!tether/dist/js/tether",
        }),*/
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
    ],
    resolve: { modules: [clientPath, "node_modules"] }
};

if (process.env.NODE_ENV === 'development') {
    webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig;