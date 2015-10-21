module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],
    files: [
      '../node_modules/expect.js/index.js',
      '../dist/riot.tmpl.js',
      'specs/core.specs.js',
      'specs/brackets.specs.js'
    ],

    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],
    preprocessors: {
      '../dist/riot.tmpl.js': ['coverage']
    },
    coverageReporter: {
      dir: '../coverage/',
      reporters: [{
        type: 'lcov',
        subdir: 'report-lcov'
      }]
    },

    singleRun: true
  })
}
