import {events} from '../EventTypes.js';

// # DataSourceEvents
// depends: [Kronicle.EventTypes](EventTypes.html)
// Extends EventTypes object with constants for DataSource events
events.BeforeDataSourcesLoaded = 'BeforeDataSourcesLoaded';
events.DataSourceLoaded = 'DataSourceLoaded';
events.AfterDataSourcesLoaded = 'AfterDataSourcesLoaded';
events.OnLogin = 'OnLogin';
events.OnCreate = 'OnCreate';
events.OnUpdate = 'OnUpdate';
events.OnRemove = 'OnRemove';
events.OnGet = 'OnGet';

export {events};