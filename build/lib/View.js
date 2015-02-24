"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var View = exports.View = (function (Module) {
    function View(args) {
        _classCallCheck(this, View);

        this.template = args.template || function () {
            return "";
        };
        this.components = [];
        if (args.components) {
            this.addComponents(args.components);
        }
        _get(Object.getPrototypeOf(View.prototype), "constructor", this).call(this, { name: args.name + "View" });
    }

    _inherits(View, Module);

    _prototypeProperties(View, null, {
        render: {
            value: function render(err, data) {
                if (!err) {
                    return this.template(data);
                }
            },
            writable: true,
            configurable: true
        },
        addComponents: {
            value: function addComponents(components) {
                for (var i in components) {
                    this.addComponent(components[i]);
                }
            },
            writable: true,
            configurable: true
        },
        addComponent: {
            value: function addComponent(component) {
                this.components[component.name.split("Component")[0]] = component;
            },
            writable: true,
            configurable: true
        }
    });

    return View;
})(Module);
Object.defineProperty(exports, "__esModule", {
    value: true
});