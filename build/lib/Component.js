"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var util = _interopRequire(require("util"));

var Component = exports.Component = (function (Module) {
    function Component() {
        var args = arguments[0] === undefined ? { components: [], template: function () {
                return "";
            }, name: "" } : arguments[0];
        _classCallCheck(this, Component);

        this.template = args.template;
        this.modules = {
            components: {}
        };
        if (args.components) {
            this.addComponents(args.components);
        }
        _get(Object.getPrototypeOf(Component.prototype), "constructor", this).call(this, { name: args.name + "Component" });
    }

    _inherits(Component, Module);

    _prototypeProperties(Component, null, {
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
                var aryComponents = components;
                if (!(components instanceof Array)) {
                    aryComponents = [components];
                }
                this.components = components;
                for (var index in aryComponents) {
                    if (aryComponents[index].name) {
                        this.addComponentModule(aryComponents[index]);
                    } else {
                        throw new Error("Error: components must have a unique name");
                    }
                }
            },
            writable: true,
            configurable: true
        },
        addComponentModule: {
            value: function addComponentModule(component) {
                this.modules.components[component.name] = component;
            },
            writable: true,
            configurable: true
        }
    });

    return Component;
})(Module);
Object.defineProperty(exports, "__esModule", {
    value: true
});