# karma-matchers-loader
Loads any type of matcher into your test scope


## Usage

Add into your `karma.conf.js`

```js
module.exports = function(config) {
    config.set({
        //insert llibrary here
        frameworks: ['matchers-loader'],
        
        //then you can load any package from bower into your test
        matchers: [
            'jquery',
            'sinonjs',
            'jasmine-ajax',
            'chai',
            'jasmine-jquery'
        ]
    });
};
```
