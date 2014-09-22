'use strict';

var grunt = require('grunt');

function getNormalizedFile(filePath) {
  return grunt.util.normalizelf(grunt.file.read(filePath));
}

exports.fixindent = {

  fix4SpacesTo2Spaces: function(test) {
    var actualJs = getNormalizedFile('tmp/test.4spaces.js'),
      actualCss = getNormalizedFile('tmp/test.4spaces.css'),
      expectedJs = getNormalizedFile('test/expected/test.tabs.js'),
      expectedCss = getNormalizedFile('test/expected/test.tabs.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with tabs indent correctly fixed to spaces');
    test.equal(actualCss, expectedCss, 'css file with tabs indent correctly fixed to sapces');

    test.done();
  },

  fixTabsToSpaces: function(test) {
    var actualJs = getNormalizedFile('tmp/test.tabs.js'),
      actualCss = getNormalizedFile('tmp/test.tabs.css'),
      expectedJs = getNormalizedFile('test/expected/test.tabs.js'),
      expectedCss = getNormalizedFile('test/expected/test.tabs.css');

    test.expect(2);

    test.equal(actualJs, expectedJs, 'js file with tabs indent correctly fixed to spaces');
    test.equal(actualCss, expectedCss, 'css file with tabs indent correctly fixed to sapces');

    test.done();
  }

};