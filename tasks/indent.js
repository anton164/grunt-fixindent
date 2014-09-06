/*
 * grunt-fixindent
 * https://github.com/anton164/grunt-fixindent
 *
 * Copyright (c) 2014 Anton Abilov
 * Licensed under the MIT license.
 *
 * Based on grunt-indent
 * https://github.com/stevenbenner/grunt-indent
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('fixindent', 'Fix the indentation of files.', function() {

    // get options object with defaults
    var options = this.options({
      style: 'space',
      size: 2,
    });

    // define one indent string
    var indent = '';
    if (options.style === 'space') {
      indent = grunt.util._.repeat(' ', options.size);
    } else if (options.style === 'tab') {
      indent = grunt.util._.repeat('\t', options.size);
    }

    // process the files
    this.files.forEach(function(file) {
      file.src.filter(function(filePath) {
        // filter out nonexistent files
        if (!grunt.file.exists(filePath)) {
          grunt.log.warn('Source file "' + filePath + '" not found.');
          return false;
        }
        return true;
      }).forEach(function(src) {
        var dest = file.dest,
          newFile = [];

        // if dest is a folder  use the src file name
        if (grunt.util._.endsWith(dest, '/')) {
          dest += path.basename(src);
        }

        var detectedIndentation = null;
        // walk the file line-by-line
        grunt.file.read(src).split(/\r\n?|\n/).forEach(function(line) {
          if (line) {
            if (!detectedIndentation) {
              var indentMatch = line.match(/^\s+/);
              if (indentMatch && indentMatch[0]  !== ' ')  {
                detectedIndentation = indentMatch[0];
              }
            }
            if (detectedIndentation) {
              var withoutLeading = line.replace(/^\s+/g, '');
              var nIndents = (line.length - withoutLeading.length) / detectedIndentation.length;
              line = grunt.util._.repeat(indent, nIndents) + withoutLeading;
            }
          }
          newFile.push(line);
        });

        grunt.file.write(dest, newFile.join(grunt.util.linefeed));
        grunt.log.writeln('File "' + dest + '" saved.');
      });
    });

  });

};