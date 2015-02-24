"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = exports.Module = (function () {
    function Module() {
        var args = arguments[0] === undefined ? { name: "" } : arguments[0];
        _classCallCheck(this, Module);

        this.name = args.name;
        this.initialize(args);
    }

    _prototypeProperties(Module, null, {
        initialize: {
            value: function initialize() {},
            writable: true,
            configurable: true
        }
    });

    return Module;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});

// no op, override to add initialization code