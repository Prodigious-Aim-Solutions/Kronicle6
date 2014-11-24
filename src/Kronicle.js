import {Core} from './Core.js';
import {events} from './EventTypes.js';
import * as PubSub from 'pubsub-js';

export class Kronicle{
    constructor(args){
        new Core(args.modules);
    }
    
    initialize(cb) {
        PubSub.subscribe(events.Initialized, cb);
    }
    
    beforeModulesLoad(cb)  {
        PubSub.subscribe(events.BeforeModulesLoad, cb);
    }
    
    moduleLoaded(cb) {
        PubSub.subscribe(events.ModuleLoaded, cb);
    }
    
    afterModulesLoad(cb){
        PubSub.subscribe(events.AfterModulesLoad, cb);
    }
    
    ready(cb){
        PubSub.subscribe(events.Ready, cb);
    }
}