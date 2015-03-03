"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var events = require("./DataSourcesEvents.js").events;
var PubSub = _interopRequire(require("pubsub-js"));

var DataSource = exports.DataSource = (function (Module) {
    function DataSource() {
        var args = arguments[0] === undefined ? { source: undefined, name: "" } : arguments[0];
        _classCallCheck(this, DataSource);

        var emptySource = {
            login: function (user, pass, cb) {
                cb();return;
            },
            create: function (item, cb) {
                cb();return;
            },
            update: function (item, cb) {
                cb();return;
            },
            remove: function (item, cb) {
                cb();return;
            },
            get: function (item, cb) {
                cb();return;
            }
        };
        this.source = args.source || emptySource;
        _get(Object.getPrototypeOf(DataSource.prototype), "constructor", this).call(this, { name: args.name });
        return this;
    }

    _inherits(DataSource, Module);

    _prototypeProperties(DataSource, null, {
        login: {
            value: function login(user, pass, cb) {
                var _this = this;
                this.source.login(user, pass, function (err, data) {
                    _this._doCbIfExists(cb, err, data);
                    PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
                });
            },
            writable: true,
            configurable: true
        },
        create: {
            value: function create(item, cb) {
                var _this = this;
                this.source.create(item, function (err, data) {
                    _this._doCbIfExists(cb, err, data);
                    PubSub.publish(events.OnCreate, item, events.OnCreate);
                });
            },
            writable: true,
            configurable: true
        },
        update: {
            value: function update(item, cb) {
                var _this = this;
                this.source.update(item, function (err, data) {
                    _this._doCbIfExists(cb, err, data);
                    PubSub.publish(events.OnUpdate, item, events.OnUpdate);
                });
            },
            writable: true,
            configurable: true
        },
        remove: {
            value: function remove(item, cb) {
                var _this = this;
                this.source.remove(item, function (err, data) {
                    _this._doCbIfExists(cb, err, data);
                    PubSub.publish(events.OnRemove, item, events.OnRemove);
                });
            },
            writable: true,
            configurable: true
        },
        get: {
            value: function get(item, cb) {
                var _this = this;
                this.source.get(item, function (err, data) {
                    _this._doCbIfExists(cb, err, data);
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
        },
        _doCbIfExists: {
            value: function _doCbIfExists(cb, err, data) {
                if (cb) {
                    cb(err, data);
                }
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