"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var Module = require('../Module.js').Module;
var Component = (function (Module) {
  var Component = function Component(args) {
    this.components = args.components || [];
    this.template = args.template || function () {
      return "";
    };
    Module.call(this, { name: args.name + "Component" });
  };

  _extends(Component, Module);

  _classProps(Component, null, {
    render: {
      writable: true,
      value: function (err, data) {
        if (!err) {
          return this.template(data);
        }
      }
    }
  });

  return Component;
})(Module);

exports.Component = Component;