"use strict";

var Controller = require('../build/lib/Controller.js').Controller;
var View = require('../build/lib/View.js').View;
var DataSource = require('../build/lib/DataSource.js').DataSource;
var ArrayDataSource = require('../build/lib/ArrayDataSource.js').ArrayDataSource;
var should = require('should')["default"];


describe("Controller", function () {
  var controller = new Controller({
    name: "Main",
    view: new View("Main"),
    dataSource: new DataSource(new ArrayDataSource(), "ArrayDataSource")
  });
  it("It should contain a property model", function () {
    controller.should.have.property("model");
  });
  it("It should contain a property view", function () {
    controller.should.have.property("view");
  });
});