"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// # Main Kronicle.Module class
// The Module class is used as the base for all modules that are to be added to the Kronicle app.
// The constructor takes an args object that contains one property by default:
// - name - the name of the module.
var Module = exports.Module = (function () {
    function Module() {
        var args = arguments[0] === undefined ? { name: "" } : arguments[0];
        _classCallCheck(this, Module);

        this.name = args.name;
        this.initialize(args);
    }

    _prototypeProperties(Module, null, {
        initialize: {

            // ## initialize method
            // This is a no-op that is overriden in an extended Module implementation and is called when the core is initalized
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