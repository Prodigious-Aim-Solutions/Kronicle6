"use strict";

var Component = require('../build/lib/Component.js').Component;
var should = require('should')["default"];


describe("Component", function () {
  var view = new Component({
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
});