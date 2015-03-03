import {Module} from '../Module.js';
import {default as PubSub} from 'pubsub-js'; 
import {events} from './DataSourcesEvents.js';

export class DataSources extends Module {
    constructor(sources = []){
        this.name = "DataSources";
        this.sources = { };
        PubSub.publish(events.BeforeDataSourcesLoaded);
        for(let index in sources) {
            console.log(sources[index].name);
            this.sources[sources[index].name] = sources[index].source;
            PubSub.publish(events.DataSourceLoaded, sources[index]);
        }
        PubSub.publish(events.AfterDataSourcesLoaded);
        return this;
    }
    
    beforeDataSourcesLoaded(cb) {
        PubSub.subscribe(events.BeforeDataSourcesLoaded, cb);
    }
    
    dataSourceLoaded(cb){
        PubSub.subscribe(events.DataSourceLoaded, cb);
    }
    
    afterDataSourcesLoaded(cb){
        PubSub.subscribe(events.AfterDataSourcesLoaded, cb);
    }
    
    addDataSource(source){
        this.sources[source.name] = source;
    }
    
    removeDataSource(name){
        this.sources[name] = null;
    }
}