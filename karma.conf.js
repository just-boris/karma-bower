module.exports = function(config) {
    config.plugins.push(require('./index.js'));
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'bower'],
        files: [
            'test/*.js'
        ],
        reporters: ['progress'],
        bowerPackages: [
            'jquery',
            'sinonjs',
            'jasmine-ajax',
            'chai',
            'jasmine-jquery',
            'bem-matchers'
        ],

        browsers: ['Firefox', 'PhantomJS']
    });
};
