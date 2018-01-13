const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
            { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ },
            { test: require.resolve('react'), loader: 'expose-loader?React' },
            { test: require.resolve('jquery'), loader: 'expose-loader?$!expose-loader?jQuery' },
            { test: /\.exec\.js$/, loader: ['script-loader'] },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract([
                    { loader: 'css-loader', options: { url: false } },
                    { loader: 'sass-loader' }
                ])
            }
        ]
    },
    plugins: [
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