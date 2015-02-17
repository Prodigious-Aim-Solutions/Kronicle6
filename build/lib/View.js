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
var View = (function (Module) {
  var View = function View(args) {
    this.template = args.template || function () {
      return "";
    };
    this.components = [];
    if (args.components) {
      this.addComponents(args.components);
    }
    Module.call(this, { name: args.name + "View" });
  };

  _extends(View, Module);

  _classProps(View, null, {
    render: {
      writable: true,
      value: function (err, data) {
        if (!err) {
          return this.template(data);
        }
      }
    },
    addComponents: {
      writable: true,
      value: function (components) {
        for (var i in components) {
          this.addComponent(components[i]);
        }
      }
    },
    addComponent: {
      writable: true,
      value: function (component) {
        this.components[component.name.split("Component")[0]] = component;
      }
    }
  });

  return View;
})(Module);

exports.View = View;