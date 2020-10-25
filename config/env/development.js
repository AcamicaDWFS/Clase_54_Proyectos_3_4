'use strict';

module.exports = {
  karma: {
    browsers: ['PhantomJS'],
    preprocessors: {
      'test/*.html' : ['html2js'],
      'lib/*.js':['coverage']
    },
    plugins: [
      require( 'karma-coverage' )
  ],
    reporters: ['progress','html2js'],
    autoWatch: false,
    singleRun: true
  }
};