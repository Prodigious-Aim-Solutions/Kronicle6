"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Core = require("./Core.js").Core;
var events = require("./EventTypes.js").events;
var PubSub = _interopRequire(require("pubsub-js"));

// # Main Kronicle Class
// depends: [Kronicle.Core](Core.html), [Kronicle.EventTypes](EventTypes.html), pubsub-js
// The main Kronicle Class, constructor takes no arguments
// The class has one property
//  - core - the core object initialized with a null value.
// Use build method to setup a core with an array of Kronicle modules passed as an argument.
var Kronicle = exports.Kronicle = (function () {
    function Kronicle() {
        _classCallCheck(this, Kronicle);

        this.core = null;
    }

    _prototypeProperties(Kronicle, null, {
        build: {

            // ## build method
            // Takes an array of Kronicle Modules as an argument and initializes the core. Returns a reference to the object.
            value: function build() {
                var args = arguments[0] === undefined ? { modules: [] } : arguments[0];
                this.core = new Core(args.modules);
                return this;
            },
            writable: true,
            configurable: true
        },
        initialize: {


            // ## initialize method
            // Takes a callback as an argument.
            // Callback is called when Kronicle Core is initialized.   
            value: function initialize(cb) {
                PubSub.subscribe(events.Initialized, cb);
                return this;
            },
            writable: true,
            configurable: true
        },
        beforeModulesLoad: {


            // ## beforeModulesLoad method
            // Takes a callback as an argument.
            // Callback is called before any Kronicle modules are loaded, callback receives all modules as an argument ie cb(modules).
            value: function beforeModulesLoad(cb) {
                PubSub.subscribe(events.BeforeModulesLoad, cb);
                return this;
            },
            writable: true,
            configurable: true
        },
        moduleLoaded: {

            // ## moduleLoaded method
            // Takes a callback as an argument.
            // Callback is called as each module is loaded, callback receives module as an argument ie cb(module)
            value: function moduleLoaded(cb) {
                PubSub.subscribe(events.ModuleLoaded, cb);
                return this;
            },
            writable: true,
            configurable: true
        },
        afterModulesLoad: {

            // ## afterModulesLoad method
            // Takes a callback as an argument.
            // Callback is called after all modules are loaded, callback receives all modules as argument ie cb(modules)
            value: function afterModulesLoad(cb) {
                PubSub.subscribe(events.AfterModulesLoad, cb);
                return this;
            },
            writable: true,
            configurable: true
        },
        ready: {

            // ## ready method
            // Takes a callback as an argument.
            // Callback is called after all modules are loaded an Kronicle is ready for use.
            value: function ready(cb) {
                PubSub.subscribe(events.Ready, cb);
                return this;
            },
            writable: true,
            configurable: true
        },
        start: {

            // ## start method
            // Takes a callback as an argument.
            // Callback is called when Kronicle is ready to be used, callback receives the core with added modules as a callback.
            // Should be used as main entry point for kronicle apps.
            value: function start(cb) {
                cb.call(this, this.core.addedModules);
                PubSub.publish(events.Start);
                return this;
            },
            writable: true,
            configurable: true
        }
    });

    return Kronicle;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});