"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Core = require('./Core.js').Core;
var events = require('./EventTypes.js').events;
var PubSub = require('pubsub-js');

var Kronicle = (function () {
  var Kronicle = function Kronicle(args) {
    new Core(args.modules);
  };

  _classProps(Kronicle, null, {
    initialize: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.Initialized, cb);
      }
    },
    beforeModulesLoad: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.BeforeModulesLoad, cb);
      }
    },
    moduleLoaded: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.ModuleLoaded, cb);
      }
    },
    afterModulesLoad: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.AfterModulesLoad, cb);
      }
    },
    ready: {
      writable: true,
      value: function (cb) {
        PubSub.subscribe(events.Ready, cb);
      }
    }
  });

  return Kronicle;
})();

exports.Kronicle = Kronicle;