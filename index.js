var path = require('path'),
    bowerResolve = require('bower-resolve');

function createPattern(path) {
  return {pattern: path, included: true, served: true, watched: false};
}

importMatchers.$inject = ['config.files', 'config.matchers'];
function importMatchers(files, matchers) {
  matchers.forEach(function(matcher) {
    var matcherFile = bowerResolve.fastReadSync(matcher);
    files.push(createPattern(matcherFile));
  });
}

module.exports = {
  'framework:matchers-loader': ['factory', importMatchers]
};
