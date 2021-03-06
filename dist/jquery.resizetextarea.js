/*!
 * Resize Textarea v1.0.4
 * Resize a textarea as you type
 * http://mogusbi.co.uk
 *
 * Written by Mo Gusbi
 */
; (function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'resizeTextarea';

  function Plugin(element, options) {
    this.element = element;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var _this = this,
          textString = $(_this.element)
                        .val()
                        .replace(/\r|\n/g, '<br />'),
          mirror = $('<div/>')
                    .addClass('mirrorContainer')
                    .css({
                      'height': 0,
                      'overflow': 'hidden'
                    })
                    .html($('<div/>')
                    .addClass('textareaMirror')
                    .html(textString)
                    .copyCSS($(_this.element), null, ['height', 'overflow']));

      $(_this.element)
        .after(mirror)
        .attr('rows', '1')
        .on('keyup keydown', function () {
          _this.keyPress();
        });

      if (textString !== '') {
        $(_this.element)
          .height($(_this.element)
            .next('.mirrorContainer')
            .children('.textareaMirror')
            .height());
      }
    },
    keyPress: function () {
      var textString = $(this.element)
                        .val()
                        .replace(/\r|\n/g, '<br />');

      $(this.element)
        .next('.mirrorContainer')
        .children('.textareaMirror')
        .html(textString + '<br />');

      $(this.element)
        .height($(this.element)
          .next('.mirrorContainer')
          .children('.textareaMirror')
          .height());
    }
  });

  $.fn[pluginName] = function () {
    this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this));
      }
    });

    return this;
  };
})(jQuery, window, document);