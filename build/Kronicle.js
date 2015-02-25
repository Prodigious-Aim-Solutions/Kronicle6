"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Core = require("./Core.js").Core;
var events = require("./EventTypes.js").events;
var PubSub = _interopRequire(require("pubsub-js"));

var Kronicle = exports.Kronicle = (function () {
    function Kronicle(args) {
        _classCallCheck(this, Kronicle);

        this.core = new Core(args.modules);
    }

    _prototypeProperties(Kronicle, null, {
        initialize: {
            value: function initialize(cb) {
                PubSub.subscribe(events.Initialized, cb);
            },
            writable: true,
            configurable: true
        },
        beforeModulesLoad: {
            value: function beforeModulesLoad(cb) {
                PubSub.subscribe(events.BeforeModulesLoad, cb);
            },
            writable: true,
            configurable: true
        },
        moduleLoaded: {
            value: function moduleLoaded(cb) {
                PubSub.subscribe(events.ModuleLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        afterModulesLoad: {
            value: function afterModulesLoad(cb) {
                PubSub.subscribe(events.AfterModulesLoad, cb);
            },
            writable: true,
            configurable: true
        },
        ready: {
            value: function ready(cb) {
                PubSub.subscribe(events.Ready, cb);
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