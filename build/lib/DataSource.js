"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var events = require("./DataSourcesEvents.js").events;
var PubSub = _interopRequire(require("pubsub-js"));

// # Kronicle.DataSource class
// depends: [Kronicle.Module](Module.html), [Kronicle.DataSourcesEvents](DataSourcesEvents.html), pubsub-js
// This class is used to implement a CRUD datasource for use in Kronicle.
// The constructor takes an args object which has the following properties:
// - source - a datasource implementation.
// - name - the name of the datasource.
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

            // ## login method
            // This is impemented in the source if the datasource requires a login.
            // The method takes three arguments
            // - user - the username needed for login.
            // - pass - the password needed for login.
            // - cb - the callback to be called after login attempt, this is passed two arguments
            //  - err - if an error is caused by the login attemp.
            //  - data - a successful login data object, often the user or token used in an API
            // An OnLogin event is triggered after the attempt, it's passed the user and pass arguments.
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

            // ## create method
            // This method is implemented in the source to create a new source item.
            // The method takes two arguments
            // - item - the item to be created.
            // - cb - the callback to be called after creation, this is passed two arguments
            //  - err - if an error is caused by the creation attempt.
            //  - data - a successfully created item.
            // An OnCreate event is triggered after the attempt, it's passed the item as an argument.
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

            // ## update method
            // This method is implemented in the source to update a source item.
            // The method takes two arguments
            // - item - the item to be updaed.
            // - cb - the callback to be called after the update, this is passed two arguments
            //  - err - if an error is caused by the update attempt.
            //  - data - a successfully updated item.
            // An OnUpdate event is triggered after the attempt, it's passed the item as an argument.
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

            // ## remove method
            // This method is implemented in the source to remove a source item.
            // The method takes two arguments
            // - item - the item to be removed.
            // - cb - the callback to be called after the removal, this is passed two arguments
            //  - err - if an error is caused by the removal attempt.
            //  - data - a successfully removed item.
            // An OnRemove event is triggered after the attempt, it's passed the item as an argument.
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

            // ## get method
            // This method is implemented in the source to get a source item.
            // The method takes two arguments
            // - item - the item to get.
            // - cb - the callback to be called after attempting to get the item, this is passed two arguments
            //  - err - if an error is caused by the get attempt.
            //  - data - a successfully retrieved item.
            // An OnGet event is triggered after the attempt, it's passed the item as an argument.
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

            // ## onLogin method
            // This method is used as a hook into the OnLogin event.
            // It is passed one argument:
            // - cb - the callback to be called after a login attemp, it's passed the following arguments.
            //  - user - the username of the attempt.
            //  - pass - the password of the attempt.
            value: function onLogin(cb) {
                PubSub.subscribe(events.OnLogin, cb);
            },
            writable: true,
            configurable: true
        },
        onCreate: {

            // ## onCreate method
            // This method is used as a hook into the OnCreate event.
            // It is passed one argument:
            // - cb - the callback to be called after a create attempt, it's passed the following argument
            //  - item - the item that was attempted to be created.
            value: function onCreate(cb) {
                PubSub.subscribe(events.OnCreate, cb);
            },
            writable: true,
            configurable: true
        },
        onUpdate: {

            // ## onUpdate method
            // This method is used as a hook into the OnUpdate event.
            // It is passed one argument:
            // - cb - the callback to be called after an update attempt, it's passed the following argument
            //  - item - the item that was attempted to be updated.
            value: function onUpdate(cb) {
                PubSub.subscribe(events.OnUpdate, cb);
            },
            writable: true,
            configurable: true
        },
        onRemove: {

            // ## onRemove method
            // This method is used as a hook into the OnRemove event.
            // It is passed one argument:
            // - cb - the callback to be called after a removal attempt, it's passed the following argument
            //  - item - the item that was attempted to be removed.
            value: function onRemove(cb) {
                PubSub.subscribe(events.OnRemove, cb);
            },
            writable: true,
            configurable: true
        },
        onGet: {

            // ## onGet method
            // This method is used as a hook into the OnGet event.
            // It is passed one argument:
            // - cb - the callback to be called after a retrieval attempt, it's passed the following argument
            //  - item - the item that was attempted to be retrieved.
            value: function onGet(cb) {
                PubSub.subscribe(events.OnGet, cb);
            },
            writable: true,
            configurable: true
        },
        _doCbIfExists: {

            // ## _doCBIfExists
            // This method is to be used internally and not meant to be used by consuming modules.
            // This method checks if a callback exists and if so, calls it with err and data arguments passed to it.
            // It take three arguments:
            // - cb - the callback to check and call if exists.
            // - err - an error to be passed to the callback if exists.
            // - data - the data to be passed to the callback if exists.
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