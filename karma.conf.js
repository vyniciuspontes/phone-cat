//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
        'lib/angular/angular.js',
        'lib/angular-route/angular-route.js',
        'lib/angular-mocks/angular-mocks.js',
        'phone-list/phone-list.module.js',
        'phone-list/phone-list.controller.js',
        'phone-list/phone-list.component.js',
        'phone-list/phone-list.component.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
