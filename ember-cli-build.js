'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
        'ember-cli-favicon': {
            enabled: true, // By default favicons are NOT generated in TEST env to speedup builds

            onSuccess() {
                console.log('Favicon successfully generated.');
            }, // You can call your callback when favicons are generated successfully

            iconPath: 'favicon.jpg', // icon path related to `public` folder
        },
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return app.toTree();
};
