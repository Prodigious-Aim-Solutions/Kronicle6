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
var PubSub = require('pubsub-js');

var events = require('./DataSourcesEvents.js').events;
var DataSources = (function (Module) {
  var DataSources = function DataSources(sources) {
    if (sources === undefined) sources = [];
    this.sources = sources;
    PubSub.publish(events.BeforeDataSourcesLoaded);
    for (var index in sources) {
      this.sources[index] = source;
      PubSub.publish(events.DataSourceLoaded, source);
    }
    PubSub.publish(events.AfterDataSourcesLoaded);
    return this;
  };

  _extends(DataSources, Module);

  _classProps(DataSources, null, {
    beforeDataSourcesLoaded: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.BeforeDataSourcesLoaded, cb);
      }
    },
    dataSourceLoaded: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.DataSourceLoaded, cb);
      }
    },
    afterDataSourcesLoaded: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.AfterDataSourcesLoaded, cb);
      }
    },
    addDataSource: {
      writable: true,
      value: function (source) {
        this.sources[source.name] = source;
      }
    },
    removeDataSource: {
      writable: true,
      value: function (name) {
        this.sources[source.name] = null;
      }
    }
  });

  return DataSources;
})(Module);

exports.DataSources = DataSources;