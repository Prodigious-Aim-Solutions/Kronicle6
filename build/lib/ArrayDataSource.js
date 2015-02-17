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

var DataSource = require('./DataSource.js').DataSource;
var ArrayDataSource = (function (DataSource) {
  var ArrayDataSource = function ArrayDataSource() {
    DataSource.apply(this, arguments);
  };

  _extends(ArrayDataSource, DataSource);

  _classProps(ArrayDataSource, null, {
    initialize: {
      writable: true,
      value: function (source, name) {
        this.data = [];
        DataSource.prototype.initialize.call(this, source, name);
      }
    },
    login: {
      writable: true,
      value: function (user, pass, cb) {
        this.user = user;
        this.pass = pass;
        cb(null, user, pass);
      }
    },
    create: {
      writable: true,
      value: function (item, cb) {
        this.data.push(item);
        cb(null, item);
      }
    },
    update: {
      writable: true,
      value: function (item, cb) {
        for (var i in this.data) {
          if (this.data[i]._id == item._id) {
            this.data[i] = item;
            cb(null, this.data[i]);
            return;
          }
        }
        cb(new Error("Item not found in data."), item);
      }
    },
    remove: {
      writable: true,
      value: function (id, cb) {
        for (var i in this.data) {
          if (this.data[i]._id == id) {
            this.data.splice(i, 1);
            cb(null, this.data.length);
            return;
          }
        }
        cb(new Error("Item not found in data."), id);
      }
    },
    get: {
      writable: true,
      value: function (id, cb) {
        for (var i in this.data) {
          if (this.data[i]._id == id) {
            cb(null, this.data[i]);
            return;
          }
        }
        cb(new Error("Item not found in data."), id);
      }
    }
  });

  return ArrayDataSource;
})(DataSource);

exports.ArrayDataSource = ArrayDataSource;