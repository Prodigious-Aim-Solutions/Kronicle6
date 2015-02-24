"use strict";
var events = require("../EventTypes.js").events;


//var events = events;
events.BeforeDataSourcesLoaded = "BeforeDataSourcesLoaded";
events.DataSourceLoaded = "DataSourceLoaded";
events.AfterDataSourcesLoaded = "AfterDataSourcesLoaded";
events.OnLogin = "OnLogin";
events.OnCreate = "OnCreate";
events.OnUpdate = "OnUpdate";
events.OnRemove = "OnRemove";
events.OnGet = "OnGet";

exports.events = events;
Object.defineProperty(exports, "__esModule", {
  value: true
});