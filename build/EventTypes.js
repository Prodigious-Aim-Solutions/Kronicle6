"use strict";

var events = {
    Initialized: "Initialized",
    BeforeModulesLoad: "BeforeModulesLoad",
    ModuleLoaded: "ModuleLoaded",
    AfterModulesLoad: "AfterModulesLoad",
    Ready: "Ready",
    Start: "Start"
};

exports.events = events;
Object.defineProperty(exports, "__esModule", {
    value: true
});