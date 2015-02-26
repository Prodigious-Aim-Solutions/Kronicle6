import {Core} from './Core.js';
import {events} from './EventTypes.js';
import {default as PubSub} from 'pubsub-js';

export class Kronicle {
    constructor(){
        this.core = null;
    }
    
    build (args = { modules: [] }) {
        this.core = new Core(args.modules);
        return this;
    }
    
    initialize(cb) {
        PubSub.subscribe(events.Initialized, cb);
        return this;
    }
    
    beforeModulesLoad(cb)  {
        PubSub.subscribe(events.BeforeModulesLoad, cb);
        return this;
    }
    
    moduleLoaded(cb) {
        PubSub.subscribe(events.ModuleLoaded, cb);
        return this;
    }
    
    afterModulesLoad(cb){
        PubSub.subscribe(events.AfterModulesLoad, cb);
        return this;
    }
    
    ready(cb) {
        PubSub.subscribe(events.Ready, cb);
        return this;
    }
    
    start(cb){
        cb.call(this);
        PubSub.publish(events.Start);
        return this;
    }
}