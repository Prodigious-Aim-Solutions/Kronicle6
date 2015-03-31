"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// # Kronicle.ArrayDataSource class
// This class is a simple native array based DataSource implementation
// The constructor initializes one property:
// - data - an empty array
var ArrayDataSource = exports.ArrayDataSource = (function () {
    function ArrayDataSource() {
        _classCallCheck(this, ArrayDataSource);

        this.data = [];
    }

    _prototypeProperties(ArrayDataSource, null, {
        login: {

            // ## login method
            // Sets the user and pass properites.
            // Takes three arguments:
            // - user - the username.
            // - pass - the password.
            // - cb - the callback to be called once the properties are set, takes three arguments
            //  - err - a null object in this case.
            //  - user - the user argument.
            //  - pass - the pass argument.
            value: function login(user, pass, cb) {
                this.user = user;
                this.pass = pass;
                cb(null, user, pass);
            },
            writable: true,
            configurable: true
        },
        create: {

            // ## create method
            // Pushes an item into the array as a create function.
            // Takes two arguments
            // - item - the item to push onto the array
            // - cb - the callback to be called once item is added, takes two arguments
            //  - err - a null object in this case
            //  - item - the created(added) item
            value: function create(item, cb) {
                this.data.push(item);
                cb(null, item);
            },
            writable: true,
            configurable: true
        },
        update: {

            // ## update method
            // Updates an item in the array
            // Takes two arguments
            // - item - the item to update from the array
            // - cb - the callback to be called once the item is updated, takes two arguments
            //  - err - and error object
            //  - item - the item
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

            // ## remove method
            // Removes an item in the array
            // Takes two arguments
            // - item - the item to remove from the array
            // - cb - the callback to be called once the item is removed, takes two arguments
            //  - err - and error object
            //  - length/id - the length if the item is removed or the id if an error occurs
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

            // ## get method
            // Gets an item in the array
            // Takes two arguments
            // - id - the id to get from the array
            // - cb - the callback to be called once the item is retrieved, takes two arguments
            //  - err - and error object
            //  - item/id - the item retrieved or the id that was attempted in error
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