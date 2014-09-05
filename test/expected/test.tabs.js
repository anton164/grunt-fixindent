/**
 * Test JavaScript File
 */

'use strict';

(function($) {
  $.fn.testPlugin = function() {
    var testElementId = 'testPluginElement';

    function getTestElement() {
      var testText = 'Generated by test plugin.',
        testElement = $('#' + testElementId);

      if (!testElement.length) {
        testElement = $('<p />').text(testText);
      }
    }

    // append test element to the body
    $('body').append(testElement);
  };
}(jQuery))