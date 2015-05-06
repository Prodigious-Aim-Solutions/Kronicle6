require("babel/polyfill");
import {default as PubSub} from 'pubsub-js'; 
import {events} from './EventTypes.js';

// # Main Kronicle.Core class
// depends: pubsub-js, [Kronicle.EventTypes](EventTypes.html)
// This is the main Kronicle Core. This class is used to load all modules that are to be used in the Kronicle app.
// Events are fired at various points to indiciate the status and can be used as hooks for library modules.
// Constructor an array of Kronicle modules as an argument.
export class Core {
    constructor(modules) {
        
        PubSub.publish(events.Initialized);
        
        this.addedModules = {};
        
        PubSub.publish(events.BeforeModulesLoad, modules);
        
        for(let mod of modules){
            
            this.addedModules[mod.name] = mod;
            PubSub.publish(events.ModuleLoaded, mod);
            
        }
        
        PubSub.publish(events.AfterModulesLoad, modules);
        PubSub.publish(events.Ready);
    }
    
}