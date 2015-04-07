var bowerResolve = require('bower-resolve');

function createPattern(path) {
  return {pattern: path, included: true, served: true, watched: false};
}

importMatchers.$inject = ['config.files', 'config.bowerPackages'];
function importMatchers(files, bowerPackages) {
  bowerPackages.forEach(function(pkg) {
    var absolutePath = bowerResolve.fastReadSync(pkg);
    files.push(createPattern(absolutePath));
  });
}

module.exports = {
  'framework:bower': ['factory', importMatchers]
};
