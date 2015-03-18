import {Core} from './Core.js';
import {events} from './EventTypes.js';
import {default as PubSub} from 'pubsub-js';

// # Main Kronicle Class
// depends: [Kronicle.Core](Core.html), [Kronicle.EventTypes](EventTypes.html), pubsub-js
// The main Kronicle Class, constructor takes no arguments 
// The class has one property
//  - core - the core object initialized with a null value.
// Use build method to setup a core with an array of Kronicle modules passed as an argument.
export class Kronicle {
    constructor(){
        this.core = null;
    }
    
    // ## build method
    // Takes an array of Kronicle Modules as an argument and initializes the core. Returns a reference to the object.
    build (args = { modules: [] }) {
        this.core = new Core(args.modules);
        return this;
    }
    

    // ## initialize method
    // Takes a callback as an argument.
    // Callback is called when Kronicle Core is initialized.    
    initialize(cb) {
        PubSub.subscribe(events.Initialized, cb);
        return this;
    }
    

    // ## beforeModulesLoad method
    // Takes a callback as an argument.
    // Callback is called before any Kronicle modules are loaded, callback receives all modules as an argument ie cb(modules).
    beforeModulesLoad(cb)  {
        PubSub.subscribe(events.BeforeModulesLoad, cb);
        return this;
    }
    
    // ## moduleLoaded method
    // Takes a callback as an argument.
    // Callback is called as each module is loaded, callback receives module as an argument ie cb(module)
    moduleLoaded(cb) {
        PubSub.subscribe(events.ModuleLoaded, cb);
        return this;
    }
    
    // ## afterModulesLoad method
    // Takes a callback as an argument.
    // Callback is called after all modules are loaded, callback receives all modules as argument ie cb(modules)
    afterModulesLoad(cb){
        PubSub.subscribe(events.AfterModulesLoad, cb);
        return this;
    }
    
    // ## ready method
    // Takes a callback as an argument.
    // Callback is called after all modules are loaded an Kronicle is ready for use.
    ready(cb) {
        PubSub.subscribe(events.Ready, cb);
        return this;
    }
    
    // ## start method
    // Takes a callback as an argument.
    // Callback is called when Kronicle is ready to be used, callback receives the core with added modules as a callback.
    // Should be used as main entry point for kronicle apps.
    start(cb){
        cb.call(this, this.core.addedModules);
        PubSub.publish(events.Start);
        return this;
    }
}