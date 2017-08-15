const { execSync } = require('child_process');
var path_to_package_json;
var fs = require('fs')
var path = require('path');
function PackagesVersionsPlugin(options) {

}

PackagesVersionsPlugin.prototype.apply = function (compiler) {
    let stdout;
    try {
        stdout = execSync('npm ls --depth=0 --prod=true', {
            cwd: compiler.options.context,
            stdio: [0]
        });
    } catch (e) {
        stdout = e.stdout;
    }
    let path2VersionTxt;
    if (compiler.options.entry.app)
        path2VersionTxt = compiler.options.entry.app.match(/(.*)\/.*$/)[1];
    else
        path2VersionTxt = compiler.options.entry.match(/(.*)\/.*\..*$/)[1];
    let versionFile = path.join(compiler.options.context, path2VersionTxt, 'versions.txt');
    if (fs.existsSync(versionFile))
        fs.unlinkSync(versionFile);
    fs.writeFileSync(versionFile, new Date().toString() + '\n' + stdout)
};
module.exports = PackagesVersionsPlugin;