"use strict";

// # MVC Example
// This is a very simple example of an MVC web app built with Kronicle6 for use in node.js

var Kronicle = require("../build/Kronicle.js").Kronicle;
var DataSource = require("../build/lib/DataSource.js").DataSource;
var DataSources = require("../build/lib/DataSources.js").DataSources;
var ArrayDataSource = require("../build/lib/ArrayDataSource.js").ArrayDataSource;
var View = require("../build/lib/View.js").View;
var Controller = require("../build/lib/Controller.js").Controller;
var Component = require("../build/lib/Component.js").Component;



// Create a DataSources object that contains an ArrayDataSource and push a test item on to it.
var dataSources = new DataSources([new DataSource({ source: new ArrayDataSource(), name: "ArrayDataSource" })]);
dataSources.sources.ArrayDataSource.create("test", function () {
    console.log("test created");
});

// Create a simple list Controller with the name ListItems.
var listController = new Controller({
    name: "ListItems",
    // View for Controller is also called ListItems, will be ListItemsView internally.
    // Will render a <ul> containing ListItem components.
    // Add a new Component called ListItem with a simple template to render the item as an <li>.
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
    // Connect the ArrayDataSource as model
    model: dataSources.sources.ArrayDataSource,
    //Initialize and set to re-render each time the onCreate, onUpdate, onRemove, onGet events are triggered
    initialize: function () {
        this.model.onCreate(this.view.render);
        this.model.onUpdate(this.view.render);
        this.model.onRemove(this.view.render);
        this.model.onGet(this.view.render);
    }
});

// Create a new Kronicle app called kronApp that has the dataSources and listController accessible internally
var kronApp = new Kronicle().build({ modules: [dataSources, listController] });

//Export for use
exports.kronApp = kronApp;
Object.defineProperty(exports, "__esModule", {
    value: true
});