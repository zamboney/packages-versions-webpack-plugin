var PackagesVersionsPlugin = require('../index.js');
var path = require('path');

var webpackConfig = {
    entry: "./dev/entry.js",
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new PackagesVersionsPlugin({ options: true })
    ]
};


module.exports = webpackConfig