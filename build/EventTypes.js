"use strict";

// # EventType constants
// These constats are used to reference the various events that Kronicle will trigger.
// Import this object and add events as necessary.
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