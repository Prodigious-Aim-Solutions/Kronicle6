"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Module = (function () {
  var Module = function Module(args) {
    if (args === undefined) args = {};
    this.name = args.name || "";
    this.initialize(args);
  };

  _classProps(Module, null, {
    initialize: {
      writable: true,
      value: function () {}
    }
  });

  return Module;
})();

exports.Module = Module;