const { exec } = require('child_process');
var path_to_package_json;
var fs = require('fs')
var path = require('path');
function PackagesVersionsPlugin(options) {

}

PackagesVersionsPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        exec('npm ls --depth=0 --prod=true || true', { cwd: compiler.options.context }, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(compiler.options.entry.match(/(.*)\/.*\..*$/)[1])
            console.log(compiler.options.context)
            let versionFile = path.join(compiler.options.context, compiler.options.entry.match(/(.*)\/.*\..*$/)[1], 'versions.txt');
            if (fs.existsSync(versionFile))
                fs.unlinkSync(versionFile);
            fs.writeFileSync(versionFile, new Date().toString() + '\n' + stdout)
            callback()
        })

    });
    compiler.plugin('done', function () {

    });
};

module.exports = PackagesVersionsPlugin;