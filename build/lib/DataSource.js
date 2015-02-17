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
var events = require('./DataSourcesEvents.js').events;
var DataSource = (function (Module) {
  var DataSource = function DataSource() {
    Module.apply(this, arguments);
  };

  _extends(DataSource, Module);

  _classProps(DataSource, null, {
    initialize: {
      writable: true,
      value: function (source, name) {
        this.source = source || {};
        this.name = this.source.name;
      }
    },
    login: {
      writable: true,
      value: function (user, pass, cb) {
        this.source.login(user, pass, function () {
          cb();
          PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
        });
      }
    },
    create: {
      writable: true,
      value: function (item, cb) {
        this.source.create(item, function () {
          cb();
          PubSub.publish(events.OnCreate, item, events.OnCreate);
        });
      }
    },
    update: {
      writable: true,
      value: function (item, cb) {
        this.source.update(item, function () {
          cb();
          PubSub.publish(events.OnUpdate, item, events.OnUpdate);
        });
      }
    },
    remove: {
      writable: true,
      value: function (item, cb) {
        this.source.remove(item, function () {
          cb();
          PubSub.publish(events.OnRemove, item, events.OnRemove);
        });
      }
    },
    get: {
      writable: true,
      value: function (item, cb) {
        this.source.get(item, function () {
          cb();
          PubSub.publish(events.OnGet, item, events.OnGet);
        });
      }
    },
    onLogin: {
      writable: true,
      value: function () {
        PubSub.subscribe(events.OnLogin, cb);
      }
    },
    onCreate: {
      writable: true,
      value: function () {
        PubSub.subscribe(events.OnCreate, cb);
      }
    },
    onUpdate: {
      writable: true,
      value: function () {
        PubSub.subscribe(events.OnUpdate, cb);
      }
    },
    onRemove: {
      writable: true,
      value: function () {
        PubSub.subscribe(events.OnRemove, cb);
      }
    },
    onGet: {
      writable: true,
      value: function () {
        PubSub.subscribe(events.OnGet, cb);
      }
    }
  });

  return DataSource;
})(Module);

exports.DataSource = DataSource;