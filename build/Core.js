"use strict";

var PubSub = require('pubsub-js');

var events = require('./EventTypes.js').events;
var Core = function Core(modules) {
  PubSub.publish(events.Initialized);
  this.addedModules = [];
  PubSub.publish(events.BeforeModulesLoad, modules);
  for (var mod in modules) {
    modules[mod].initialize();
    this.addedModules.push(mod);
    PubSub.publish(events.ModuleLoaded, mod);
  }
  PubSub.publish(events.AfterModulesLoad, modules);
  PubSub.publish(events.Ready);
};

exports.Core = Core;