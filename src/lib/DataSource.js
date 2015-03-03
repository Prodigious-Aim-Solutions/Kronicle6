import {Module} from '../Module.js';
import {events} from './DataSourcesEvents.js';
import {default as PubSub} from 'pubsub-js';

export class DataSource extends Module {
    constructor(args = {source: undefined, name: ''}) {
        let emptySource = {
            login: (user, pass, cb) => { cb(); return; },
            create: (item, cb) => { cb(); return; },
            update: (item, cb) => { cb(); return; },
            remove: (item, cb) => { cb(); return; },
            get: (item, cb) => { cb(); return; }
        };
        this.source = args.source || emptySource;
        super({name: args.name});
        return this;
    }
    
    login(user, pass, cb) {
        this.source.login(user, pass, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
        });        
    }
    
    create(item, cb) {
        this.source.create(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnCreate, item, events.OnCreate);
        });        
    }
    
    update(item, cb) {
        this.source.update(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnUpdate, item, events.OnUpdate);
        });        
    }
    
    remove(item, cb) {
        this.source.remove(item, (err, data)=> {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnRemove, item, events.OnRemove);
        });        
    }
    
    get(item, cb) {
        this.source.get(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
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
    
    _doCbIfExists(cb, err, data) {
        if(cb){
            cb(err, data);
        }
    }
}