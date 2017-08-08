# packages-versions-webpack-plugin
this package create a text file that contain the correct dependencies of the project

> this plugin create a `version.txt` file in the `entry` folder that contain the current packages that install on the porject

# install this plugin

1. `npm install --save-dev packages-versions-webpack-plugin`
2. in the `webpack.config.js`
```js
    var PackagesVersionsPlugin = require('packages-versions-webpack-plugin');
```
3. in the plugin section
```js
    var webpackConfig = {
        ...
        plugins: [
            ...
            new PackagesVersionsPlugin(),
            ...
        ],
        ...
};
```
# using this plugin in the code 

this plugin can be using in the code using `raw-loader` like so
```js
    console.info(require('!!raw-loader!./versions.txt'));
```

> notice that you need to install [raw-loader](https://github.com/webpack-contrib/raw-loader) in order to use this snippit

# version releases

## 1.0.2

* use try and catch in the creating of the `version.txt` in order to dismiss `npm ls` error like peer dependencies
* update README.md file

