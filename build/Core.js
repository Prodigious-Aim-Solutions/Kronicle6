"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PubSub = _interopRequire(require("pubsub-js"));

var events = require("./EventTypes.js").events;


// # Main Kronicle.Core class
// depends: pubsub-js, [Kronicle.EventTypes](EventTypes.html)
// This is the main Kronicle Core. This class is used to load all modules that are to be used in the Kronicle app.
// Events are fired at various points to indiciate the status and can be used as hooks for library modules.
// Constructor an array of Kronicle modules as an argument.
var Core = exports.Core = function Core(modules) {
    _classCallCheck(this, Core);

    PubSub.publish(events.Initialized);

    this.addedModules = {};

    PubSub.publish(events.BeforeModulesLoad, modules);

    for (var mod in modules) {
        this.addedModules[modules[mod].name] = modules[mod];
        PubSub.publish(events.ModuleLoaded, modules[mod]);
    }

    PubSub.publish(events.AfterModulesLoad, modules);
    PubSub.publish(events.Ready);
};

Object.defineProperty(exports, "__esModule", {
    value: true
});