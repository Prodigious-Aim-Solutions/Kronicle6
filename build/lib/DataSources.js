"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var PubSub = _interopRequire(require("pubsub-js"));

var events = require("./DataSourcesEvents.js").events;
var DataSources = exports.DataSources = (function (Module) {
    function DataSources() {
        var sources = arguments[0] === undefined ? [] : arguments[0];
        _classCallCheck(this, DataSources);

        this.name = "DataSources";
        this.sources = {};
        PubSub.publish(events.BeforeDataSourcesLoaded);
        for (var index in sources) {
            console.log(sources[index].name);
            this.sources[sources[index].name] = sources[index].source;
            PubSub.publish(events.DataSourceLoaded, sources[index]);
        }
        PubSub.publish(events.AfterDataSourcesLoaded);
        return this;
    }

    _inherits(DataSources, Module);

    _prototypeProperties(DataSources, null, {
        beforeDataSourcesLoaded: {
            value: function beforeDataSourcesLoaded(cb) {
                PubSub.subscribe(events.BeforeDataSourcesLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        dataSourceLoaded: {
            value: function dataSourceLoaded(cb) {
                PubSub.subscribe(events.DataSourceLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        afterDataSourcesLoaded: {
            value: function afterDataSourcesLoaded(cb) {
                PubSub.subscribe(events.AfterDataSourcesLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        addDataSource: {
            value: function addDataSource(source) {
                this.sources[source.name] = source;
            },
            writable: true,
            configurable: true
        },
        removeDataSource: {
            value: function removeDataSource(name) {
                this.sources[name] = null;
            },
            writable: true,
            configurable: true
        }
    });

    return DataSources;
})(Module);
Object.defineProperty(exports, "__esModule", {
    value: true
});