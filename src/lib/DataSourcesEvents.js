"use strict";
import {events} from '../EventTypes.js';

var events = events;
events.BeforeDataSourcesLoaded = 'BeforeDataSourcesLoaded';
events.DataSourceLoaded = 'DataSourceLoaded';
events.AfterDataSourcesLoaded = 'AfterDataSourcesLoaded';
events.OnLogin = 'OnLogin';
events.OnCreate = 'OnCreate';
events.OnUpdate = 'OnUpdate';
events.OnRemove = 'OnRemove';
events.OnGet = 'OnGet';

export {events};