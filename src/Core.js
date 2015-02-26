import {default as PubSub} from 'pubsub-js'; 
import {events} from './EventTypes.js';

export class Core {
    constructor(modules) {
        PubSub.publish(events.Initialized);
        this.addedModules = {};
        PubSub.publish(events.BeforeModulesLoad, modules);
        for(var mod in modules){
            modules[mod].initialize();
            this.addedModules[modules[mod].name] = modules[mod];
            PubSub.publish(events.ModuleLoaded, modules[mod]);
        }
        PubSub.publish(events.AfterModulesLoad, modules);
        PubSub.publish(events.Ready);
    }
    
}