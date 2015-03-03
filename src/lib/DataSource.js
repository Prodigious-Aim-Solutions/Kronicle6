import {Module} from '../Module.js';
import {events} from './DataSourcesEvents.js';
import {default as PubSub} from 'pubsub-js';

export class DataSource extends Module {
    constructor(args = {source: {}, name: ''}) {
        this.source = args.source;
        super({name: args.name});
    }
    
    login(user, pass, cb) {
        this.source.login(user, pass, () => {
            cb();
            PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
        });
        
    }
    
    create(item, cb) {
        this.source.create(item, () => {
            cb();
            PubSub.publish(events.OnCreate, item, events.OnCreate);
        });        
    }
    
    update(item, cb) {
        this.source.update(item,() => {
            cb();
            PubSub.publish(events.OnUpdate, item, events.OnUpdate);
        });        
    }
    
    remove(item, cb) {
        this.source.remove(item, ()=> {
            cb();
            PubSub.publish(events.OnRemove, item, events.OnRemove);
        });        
    }
    
    get(item, cb) {
        this.source.get(item, () => {
            cb();
            PubSub.publish(events.OnGet, item, events.OnGet);
        });
    }
    
    onLogin() {
         PubSub.subscribe(events.OnLogin, cb);
    }
    
    onCreate() {
        PubSub.subscribe(events.OnCreate, cb);
    }
    
    onUpdate() {
        PubSub.subscribe(events.OnUpdate, cb);
    }
    
    onRemove() {
        PubSub.subscribe(events.OnRemove, cb);
    }
    
    onGet() {
        PubSub.subscribe(events.OnGet, cb);
    }
}