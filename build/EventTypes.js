"use strict";

var events = {
    Initialized: "Initialized",
    BeforeModulesLoad: "BeforeModulesLoad",
    ModuleLoaded: "ModuleLoaded",
    AfterModulesLoad: "AfterModulesLoad",
    Ready: "Ready"
};

exports.events = events;
Object.defineProperty(exports, "__esModule", {
    value: true
});