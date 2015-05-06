// # Browser Example
// This is a very simple example of a web app built with Kronicle6 for use in browsers

var Kronicle = require("../../build/Kronicle.js").Kronicle;
var DataSource = require("../../build/lib/DataSource.js").DataSource;
var DataSources = require("../../build/lib/DataSources.js").DataSources;
var ArrayDataSource = require("../../build/lib/ArrayDataSource.js").ArrayDataSource;
var View = require("../../build/lib/View.js").View;
var Controller = require("../../build/lib/Controller.js").Controller;
var Component = require("../../build/lib/Component.js").Component;



// Create a DataSources object that contains an ArrayDataSource and push a test item on to it.
var dataSources = new DataSources([new DataSource({ source: new ArrayDataSource(), name: "ArrayDataSource" })]);
dataSources.sources.ArrayDataSource.create("test", function () {
    console.log("test created");
});
