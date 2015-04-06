module.exports = function(config) {
    config.plugins.push(require('./index.js'));
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'matchers-loader'],
        files: [
            'test/*.js'
        ],
        reporters: ['progress'],
        matchers: [
            'jquery',
            'sinonjs',
            'jasmine-ajax',
            'chai',
            'jasmine-jquery'
        ],

        browsers: ['Firefox', 'PhantomJS']
    });
};
