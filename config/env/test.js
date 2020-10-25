'use strict';

module.exports = {
  karma: {
    browsers: ['Chrome'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      'test/*.html' : ['html2js']
    },
    reporters: ['progress', 'coverage','html2js'],
    autoWatch: false,
    singleRun: true
  }
};