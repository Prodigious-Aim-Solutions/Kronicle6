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
});

describe("Kronicle", function () {
   it("It should have a method initialize", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("initialize");
   });

   it("It should have a method beforeModulesLoad", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("beforeModulesLoad");
   });

   it("It should have a method moduleLoaded", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("moduleLoaded");
   });

   it("It should have a method afterModulesLoad", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("afterModulesLoad");
   });

   it("It should have a method ready", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("ready");
   });

   it("It should have a property core", function () {
      var mod = new Module();
      var kronicle = new Kronicle({ modules: [mod] });
      kronicle.should.have.property("ready");
   });
});