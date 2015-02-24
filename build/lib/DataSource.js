"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var events = require("./DataSourcesEvents.js").events;
var PubSub = _interopRequire(require("pubsub-js"));

var DataSource = exports.DataSource = (function (Module) {
    function DataSource() {
        _classCallCheck(this, DataSource);

        if (Module != null) {
            Module.apply(this, arguments);
        }
    }

    _inherits(DataSource, Module);

    _prototypeProperties(DataSource, null, {
        initialize: {
            value: function initialize(source, name) {
                this.source = source || {};
                this.name = this.source.name;
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login(user, pass, cb) {
                this.source.login(user, pass, function () {
                    cb();
                    PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
                });
            },
            writable: true,
            configurable: true
        },
        create: {
            value: function create(item, cb) {
                this.source.create(item, function () {
                    cb();
                    PubSub.publish(events.OnCreate, item, events.OnCreate);
                });
            },
            writable: true,
            configurable: true
        },
        update: {
            value: function update(item, cb) {
                this.source.update(item, function () {
                    cb();
                    PubSub.publish(events.OnUpdate, item, events.OnUpdate);
                });
            },
            writable: true,
            configurable: true
        },
        remove: {
            value: function remove(item, cb) {
                this.source.remove(item, function () {
                    cb();
                    PubSub.publish(events.OnRemove, item, events.OnRemove);
                });
            },
            writable: true,
            configurable: true
        },
        get: {
            value: function get(item, cb) {
                this.source.get(item, function () {
                    cb();
                    PubSub.publish(events.OnGet, item, events.OnGet);
                });
            },
            writable: true,
            configurable: true
        },
        onLogin: {
            value: function onLogin() {
                PubSub.subscribe(events.OnLogin, cb);
            },
            writable: true,
            configurable: true
        },
        onCreate: {
            value: function onCreate() {
                PubSub.subscribe(events.OnCreate, cb);
            },
            writable: true,
            configurable: true
        },
        onUpdate: {
            value: function onUpdate() {
                PubSub.subscribe(events.OnUpdate, cb);
            },
            writable: true,
            configurable: true
        },
        onRemove: {
            value: function onRemove() {
                PubSub.subscribe(events.OnRemove, cb);
            },
            writable: true,
            configurable: true
        },
        onGet: {
            value: function onGet() {
                PubSub.subscribe(events.OnGet, cb);
            },
            writable: true,
            configurable: true
        }
    });

    return DataSource;
})(Module);
Object.defineProperty(exports, "__esModule", {
    value: true
});