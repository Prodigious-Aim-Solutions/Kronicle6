"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Component = require("../build/lib/Component.js").Component;
var should = _interopRequire(require("should"));

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