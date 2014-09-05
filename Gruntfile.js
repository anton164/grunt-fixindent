/*
 * grunt-fixindent
 * https://github.com/anton164/grunt-fixindent
 *
 * Copyright (c) 2014 Anton Abilov
 * Licensed under the MIT license.
 *
 * Based on grunt-indent
 * https://github.com/stevenbenner/grunt-indent
 * Copyright (c) 2013 Steven Benner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    clean: {
      tests: ['tmp'],
    },
    fixindent: {
      fix4SpacesTo2Spaces: {
        src: ['test/fixtures/*.4spaces.js', 'test/fixtures/*.4spaces.css'],
        dest: 'tmp/',
        options: {
          style: 'space',
          size: 2
        }
      },
      fixTabsToSpaces: {
        src: ['test/fixtures/*.tabs.js', 'test/fixtures/*.tabs.css'],
        dest: 'tmp/',
        options: {
          style: 'space',
          size: 2
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint', 'clean', 'fixindent', 'nodeunit']);

};