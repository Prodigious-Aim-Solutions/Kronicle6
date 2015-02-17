"use strict";

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
var Controller = (function (Module) {
  var Controller = function Controller(args) {
    this.model = args.model;
    this.view = args.view;
    Module.call(this, { name: args.name + "Controller" });
  };

  _extends(Controller, Module);

  return Controller;
})(Module);

exports.Controller = Controller;