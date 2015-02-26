"use strict";

var Kronicle = require("../build/Kronicle.js").Kronicle;
var DataSource = require("../build/lib/DataSource.js").DataSource;
var DataSources = require("../build/lib/DataSources.js").DataSources;
var ArrayDataSource = require("../build/lib/ArrayDataSource.js").ArrayDataSource;
var View = require("../build/lib/View.js").View;
var Controller = require("../build/lib/Controller.js").Controller;
var Component = require("../build/lib/Component.js").Component;


var dataSources = new DataSources([new DataSource(new ArrayDataSource(), "ArrayDataSource")]);
//dataSources.sources['ArrayDataSource'].create('test');
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
    model: dataSources.ArrayDataSource,
    initialize: function () {
        undefined.model.onCreate(undefined.view.render);
        undefined.model.onUpdate(undefined.view.render);
        undefined.model.onRemove(undefined.view.render);
        undefined.model.onGet(undefined.view.render);
    }
});
var controllers = [listController]; //need controller collection wrapper, maybe router?
var kronApp = new Kronicle().build({ modules: [dataSources, listController] });

exports.kronApp = kronApp;
Object.defineProperty(exports, "__esModule", {
    value: true
});
