"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Core = require("../build/Core.js").Core;
var Module = require("../build/Module.js").Module;
var Kronicle = require("../build/Kronicle.js").Kronicle;
var should = _interopRequire(require("should"));

describe("Module", function () {
    it("It should have a method initialize", function () {
        var mod = new Module();
        mod.should.have.property("initialize");
    });
});

describe("Core", function () {
    it("It should accept a property addedModules", function () {
        var mod = new Module();
        var core = new Core(new Array(mod));
        core.should.have.property("addedModules");
    });
    it("addedModules should be an object that allows users to reference modules by name", function () {
        var mod = new Module({ name: "test" });
        var core = new Core(new Array(mod));
        core.should.have.property("addedModules").which.is.an.Object;
        core.addedModules.test.should.exists;
    });
});

describe("Kronicle", function () {
    var mod = new Module({ name: "test" });
    var kronicle = new Kronicle().build({ modules: [mod] });

    it("It should have a method initialize", function () {
        kronicle.should.have.property("initialize");
    });

    it("It should have a method beforeModulesLoad", function () {
        kronicle.should.have.property("beforeModulesLoad");
    });

    it("It should have a method moduleLoaded", function () {
        kronicle.should.have.property("moduleLoaded");
    });

    it("It should have a method afterModulesLoad", function () {
        kronicle.should.have.property("afterModulesLoad");
    });

    it("It should have a method ready", function () {
        kronicle.should.have.property("ready");
    });

    it("It should have a method ready", function () {
        kronicle.should.have.property("ready");
    });

    it("It should have a method start which takes a callback that receives an object which contains loadedModules", function (done) {
        kronicle.should.have.property("start");
        kronicle.start(function (app) {
            app.should.exist;
            app.should.have.property("test");
            done();
        });
    });

    it("It should have a method build", function () {
        kronicle.should.have.property("build");
    });

    it("It should have a property core", function () {
        kronicle.should.have.property("ready");
    });
});