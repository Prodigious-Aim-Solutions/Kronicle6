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
dataSources.sources.ArrayDataSource.create('Kronicle', function () {
    console.log('test created');
});

// Create Hello World Controller
var helloCtrl = new Controller({
    name: 'HelloWorld',
    // View for controller, also called HelloWorld, will be renamed internally to HelloWorldView
    view: new View({
        name: 'HelloWorld',
        template: function(data) {
            return data ? '<h1>Hello ' + data + '! What A Curveball!</h1>' : 'Hello World';
        }
    }),
    model: dataSources.sources.ArrayDataSource
});

// Create App and Export to window
// Note: this version creates the global kronApp but if you choose to do so it could be
// a commonjs module or amd module or any other module you choose. This is a detal left
// up to the developer. Future tooling may move to a best practice for a certain module type
// ,most likely es6.
var kronApp = new Kronicle().build({ modules: [dataSources, helloCtrl] });
window.kronApp = kronApp;