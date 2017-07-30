var PackagesVersionsPlugin = require('../index.js');

var webpackConfig = {
    entry: "./dev/entry.js",
    output: {
        path: __dirname,
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