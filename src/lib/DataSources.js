import {Module} from '../Module.js';
import {default as PubSub} from 'pubsub-js'; 
import {events} from './DataSourcesEvents.js';

// # Kronicle.Datasources class
// depends: [Kronicle.Module](Module.html), [Kronicle.DataSourcesEvents](DataSourcesEvents), pubsub-js
// This class is used to load Kronicle Datasources.
// The object is then passed along to the core to allow access to DataSources
// The constructor takes one argument:
// - sources - an array of Kronicle DataSource
// The constructor throws events at various points.
// The class has two properties:
// - name - a string constant 'DataSources'
// - sources - an object that will contain the Kronicle DataSource
// Events are fired at various points to indiciate the status and can be used as hooks for library modules.
export class DataSources extends Module {
    constructor(sources = []){
        
        this.name = "DataSources";
        this.sources = { };
        
        PubSub.publish(events.BeforeDataSourcesLoaded);
        
        for(let index in sources) {
            this.sources[sources[index].name] = sources[index];
            
            PubSub.publish(events.DataSourceLoaded, sources[index]);
        }
        
        PubSub.publish(events.AfterDataSourcesLoaded);
        return this;
    }
    
    // ## beforeDataSourcesLoaded method
    // This method is a hook into the BeforeDataSourcesLoaded event.
    // It takes one argument:
    // - cb - the callback to be called when the event is triggered.
    beforeDataSourcesLoaded(cb) {
        PubSub.subscribe(events.BeforeDataSourcesLoaded, cb);
    }
    
    // ## dataSourceLoaded method
    // This method is a hook into the DataSourceLoaded event.
    // Triggered after each DataSource is loaded.
    // It takes one argument:
    // - cb - the callback to be called when the event is triggered, it is passed one argument.
    //  - source - the source that is loaded.
    dataSourceLoaded(cb){
        PubSub.subscribe(events.DataSourceLoaded, cb);
    }
    
    // ## afterDataSourcesLoaded method
    // This method is a hook into the AfterDataSourcesLoaded event.
    // Triggered after all DataSource are loaded.
    // It takes one argument:
    // - cb - the callback to be called when the event is triggered, it is passed one argument.
    //  - sources - the sources that have been loaded.
    afterDataSourcesLoaded(cb){
        PubSub.subscribe(events.AfterDataSourcesLoaded, cb);
    }
    
    // ## addDataSource
    // This method is used to add a DataSource to the sources.
    // It takes one argument:
    // - source - the source to be added.
    addDataSource(source){
        this.sources[source.name] = source;
    }
    
    // ##removeDataSource
    // This method is used to remove a DataSource from the sources.
    // It takes one argument:
    // - name - the name of the source to be removed.
    removeDataSource(name){
        this.sources[name] = null;
    }
}