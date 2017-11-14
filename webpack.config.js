const path = require('path');
const sourceDir = 'src';
const sourcePath = path.join(process.cwd(), sourceDir);
const clientPath = path.join(sourcePath, 'client');
const clientEntryPath = path.join(clientPath, 'client.js');
const outputPath = path.join(process.cwd(), 'build/assets');

const webpackConfig = {
    context: __dirname,
    entry: clientEntryPath,
    output: {
        path: outputPath,
        filename: 'app.js'
    },
    module: {
        loaders: [
            //{ test: /\.html$/, loader: 'html' },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            { test: require.resolve("react"), loader: "expose-loader?React" }
        ]
    },
    resolve: { modules: [clientPath, "node_modules"] }
};

if (process.env.NODE_ENV === 'development') {
    webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig;