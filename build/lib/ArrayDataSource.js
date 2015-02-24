"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var DataSource = require("./DataSource.js").DataSource;
var ArrayDataSource = exports.ArrayDataSource = (function (DataSource) {
    function ArrayDataSource() {
        _classCallCheck(this, ArrayDataSource);

        if (DataSource != null) {
            DataSource.apply(this, arguments);
        }
    }

    _inherits(ArrayDataSource, DataSource);

    _prototypeProperties(ArrayDataSource, null, {
        initialize: {
            value: function initialize(source, name) {
                this.data = [];
                _get(Object.getPrototypeOf(ArrayDataSource.prototype), "initialize", this).call(this, source, name);
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login(user, pass, cb) {
                this.user = user;
                this.pass = pass;
                cb(null, user, pass);
            },
            writable: true,
            configurable: true
        },
        create: {
            value: function create(item, cb) {
                this.data.push(item);
                cb(null, item);
            },
            writable: true,
            configurable: true
        },
        update: {
            value: function update(item, cb) {
                for (var i in this.data) {
                    if (this.data[i]._id == item._id) {
                        this.data[i] = item;
                        cb(null, this.data[i]);
                        return;
                    }
                }
                cb(new Error("Item not found in data."), item);
            },
            writable: true,
            configurable: true
        },
        remove: {
            value: function remove(id, cb) {
                for (var i in this.data) {
                    if (this.data[i]._id == id) {
                        this.data.splice(i, 1);
                        cb(null, this.data.length);
                        return;
                    }
                }
                cb(new Error("Item not found in data."), id);
            },
            writable: true,
            configurable: true
        },
        get: {
            value: function get(id, cb) {
                for (var i in this.data) {
                    if (this.data[i]._id == id) {
                        cb(null, this.data[i]);
                        return;
                    }
                }
                cb(new Error("Item not found in data."), id);
            },
            writable: true,
            configurable: true
        }
    });

    return ArrayDataSource;
})(DataSource);
Object.defineProperty(exports, "__esModule", {
    value: true
});