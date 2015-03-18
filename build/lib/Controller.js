"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;


// # Kronicle.Controller class
// This class is used to handle events from users and dispatch the proper response via view and model.
// The constructor takes an args object which contains the following properties:
// - model - the data model associated with the controller.
// - view - the Kronicle View associated withe the controller.
// - name - the name of the Controller.
var Controller = exports.Controller = (function (Module) {
    function Controller() {
        var args = arguments[0] === undefined ? { model: {}, view: {}, name: "" } : arguments[0];
        _classCallCheck(this, Controller);

        this.model = args.model;
        this.view = args.view;
        this.initialize = args.initialize || _get(Object.getPrototypeOf(Controller.prototype), "initialize", this);
        this.initialize = this.initialize.bind(this);
        _get(Object.getPrototypeOf(Controller.prototype), "constructor", this).call(this, { name: args.name + "Controller" });
    }

    _inherits(Controller, Module);

    return Controller;
})(Module);
Object.defineProperty(exports, "__esModule", {
    value: true
});