# karma-bower

> Loads bower packages into your test scope. 

If you want to have extra test libraries into your karma tests, such as `sinon` or `jasmine-jquery`, you can easily 
do it with this plugin and `bower`


## Simple example

`npm install karma-bower --save-dev`

Then install your interested package via [bower]

Add into your `karma.conf.js`

```js
module.exports = function(config) {
    config.set({
        frameworks: ['matchers-loader'],
        
        //then you can load any package from bower into your tests
        bowerPackages: [
            'jquery',
            'sinonjs',
            'jasmine-ajax',
            'chai',
            'jasmine-jquery'
        ]
    });
};
```

You can include any package that you need. The only requirement is to have it installed via bower and have 
the `main` section in its `bower.json`. 

[bower]: http://bower.io
