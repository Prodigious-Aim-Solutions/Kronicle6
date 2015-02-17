"use strict";

var View = require('../build/lib/View.js').View;
var Component = require('../build/lib/Component.js').Component;
var should = require('should')["default"];


describe("View", function () {
  var view = new View({
    name: "main",
    template: function () {
      return "<div></div>";
    },
    components: []
  });
  it("It should contain a property name which is a string", function () {
    view.should.have.property("name").and.be.type("string");
  });
  it("It should contain a method render which returns a string", function () {
    view.should.have.property("render");
    view.render().should.be.type("string");
  });
  it("It should contain a property template", function () {
    view.should.have.property("template");
  });
  it("It should contain a property components which is an array", function () {
    view.should.have.property("components").and.be.an.Array;
  });
  it("It should contain a method addComponents which takes an array of components and registers them to this.components", function () {
    view.should.have.property("addComponents");
    view.addComponents([new Component({
      name: "Test",
      template: function (data) {
        return "data";
      } })]);
    view.components["Test"].should.exist;
  });
  it("It should contain a method addComponent which takes a component and registers them to this.components", function () {
    view.should.have.property("addComponent");
    view.addComponent(new Component({
      name: "Test",
      template: function (data) {
        return "data";
      } }));
    view.components["Test"].should.exist;
  });
});