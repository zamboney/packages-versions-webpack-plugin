const { execSync } = require('child_process');
var path_to_package_json;
var fs = require('fs')
var path = require('path');
function PackagesVersionsPlugin(options) {

}

PackagesVersionsPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compile', function (a, b, c, d, e) {
        let stdout;
        try {
            stdout = execSync('npm ls --depth=0 --prod=true', {
                cwd: compiler.options.context,
                stdio: [0]
            });
        } catch (e) {
            stdout = e.stdout;
        }
        let versionFile = path.join(compiler.options.context, compiler.options.entry.match(/(.*)\/.*\..*$/)[1], 'versions.txt');
        if (fs.existsSync(versionFile))
            fs.unlinkSync(versionFile);
        fs.writeFileSync(versionFile, new Date().toString() + '\n' + stdout)
    })
};
module.exports = PackagesVersionsPlugin;