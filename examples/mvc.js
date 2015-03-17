"use strict";

var Kronicle = require("../build/Kronicle.js").Kronicle;
var DataSource = require("../build/lib/DataSource.js").DataSource;
var DataSources = require("../build/lib/DataSources.js").DataSources;
var ArrayDataSource = require("../build/lib/ArrayDataSource.js").ArrayDataSource;
var View = require("../build/lib/View.js").View;
var Controller = require("../build/lib/Controller.js").Controller;
var Component = require("../build/lib/Component.js").Component;


var dataSources = new DataSources([new DataSource({ source: new ArrayDataSource(), name: "ArrayDataSource" })]);
dataSources.sources.ArrayDataSource.create("test", function () {
    console.log("test created");
});
var listController = new Controller({
    name: "ListItems",
    view: new View({
        name: "ListItems",
        template: function (data) {
            return "<ul>{list}</ul>".replace("{list}", data);
        },
        components: [new Component({
            name: "ListItem",
            template: function (data) {
                return "<li>{data}</li>".replace("{data}", data);
            },
            components: []
        })],
        render: function (err, data) {
            var output = "";
            if (data) {
                for (var i in data) {
                    output += undefined.components.modules.ListItemComp.render(data[i]);
                }
                return output;
            }
        }
    }),
    model: dataSources.sources.ArrayDataSource,
    initialize: function () {
        this.model.onCreate(this.view.render);
        this.model.onUpdate(this.view.render);
        this.model.onRemove(this.view.render);
        this.model.onGet(this.view.render);
    }
});

var kronApp = new Kronicle().build({ modules: [dataSources, listController] });

exports.kronApp = kronApp;
Object.defineProperty(exports, "__esModule", {
    value: true
});