"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Module = require("../Module.js").Module;
var PubSub = _interopRequire(require("pubsub-js"));

var events = require("./DataSourcesEvents.js").events;


// # Kronicle.Datasources class
// depends: [Kronicle.Module](Module.html), [Kronicle.DataSourcesEvents](DataSourcesEvents), pubsub-js
// This class is used to load Kronicle Datasources.
// The object is then passed along to the core to allow access to DataSources
// The constructor takes one argument:
// - sources - an array of Kronicle DataSource
// The constructor throws events at various points.
// The class has two properties:
// - name - a string constant 'DataSources'
// - sources - an object that will contain the Kronicle DataSource
// Events are fired at various points to indiciate the status and can be used as hooks for library modules.
var DataSources = exports.DataSources = (function (Module) {
    function DataSources() {
        var sources = arguments[0] === undefined ? [] : arguments[0];
        _classCallCheck(this, DataSources);

        this.name = "DataSources";
        this.sources = {};

        PubSub.publish(events.BeforeDataSourcesLoaded);

        for (var index in sources) {
            this.sources[sources[index].name] = sources[index];

            PubSub.publish(events.DataSourceLoaded, sources[index]);
        }

        PubSub.publish(events.AfterDataSourcesLoaded);
        return this;
    }

    _inherits(DataSources, Module);

    _prototypeProperties(DataSources, null, {
        beforeDataSourcesLoaded: {

            // ## beforeDataSourcesLoaded method
            // This method is a hook into the BeforeDataSourcesLoaded event.
            // It takes one argument:
            // - cb - the callback to be called when the event is triggered.
            value: function beforeDataSourcesLoaded(cb) {
                PubSub.subscribe(events.BeforeDataSourcesLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        dataSourceLoaded: {

            // ## dataSourceLoaded method
            // This method is a hook into the DataSourceLoaded event.
            // Triggered after each DataSource is loaded.
            // It takes one argument:
            // - cb - the callback to be called when the event is triggered, it is passed one argument.
            //  - source - the source that is loaded.
            value: function dataSourceLoaded(cb) {
                PubSub.subscribe(events.DataSourceLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        afterDataSourcesLoaded: {

            // ## afterDataSourcesLoaded method
            // This method is a hook into the AfterDataSourcesLoaded event.
            // Triggered after all DataSource are loaded.
            // It takes one argument:
            // - cb - the callback to be called when the event is triggered, it is passed one argument.
            //  - sources - the sources that have been loaded.
            value: function afterDataSourcesLoaded(cb) {
                PubSub.subscribe(events.AfterDataSourcesLoaded, cb);
            },
            writable: true,
            configurable: true
        },
        addDataSource: {

            // ## addDataSource
            // This method is used to add a DataSource to the sources.
            // It takes one argument:
            // - source - the source to be added.
            value: function addDataSource(source) {
                this.sources[source.name] = source;
            },
            writable: true,
            configurable: true
        },
        removeDataSource: {

            // ##removeDataSource
            // This method is used to remove a DataSource from the sources.
            // It takes one argument:
            // - name - the name of the source to be removed.
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