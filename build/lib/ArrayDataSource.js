"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var DataSource = require("./DataSource.js").DataSource;
var ArrayDataSource = exports.ArrayDataSource = (function () {
    function ArrayDataSource(source, name) {
        _classCallCheck(this, ArrayDataSource);

        this.data = [];
        //super.initialize(source, name);
    }

    _prototypeProperties(ArrayDataSource, null, {
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
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});