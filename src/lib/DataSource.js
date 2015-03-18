import {Module} from '../Module.js';
import {events} from './DataSourcesEvents.js';
import {default as PubSub} from 'pubsub-js';

// # Kronicle.DataSource class
// depends: [Kronicle.Module](Module.html), [Kronicle.DataSourcesEvents](DataSourcesEvents.html), pubsub-js
// This class is used to implement a CRUD datasource for use in Kronicle.
// The constructor takes an args object which has the following properties:
// - source - a datasource implementation.
// - name - the name of the datasource.
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
    
    // ## login method
    // This is impemented in the source if the datasource requires a login.
    // The method takes three arguments
    // - user - the username needed for login.
    // - pass - the password needed for login.
    // - cb - the callback to be called after login attempt, this is passed two arguments
    //  - err - if an error is caused by the login attemp.
    //  - data - a successful login data object, often the user or token used in an API
    // An OnLogin event is triggered after the attempt, it's passed the user and pass arguments.
    login(user, pass, cb) {
        this.source.login(user, pass, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnLogin, user, pass, events.OnLogin);
        });        
    }
    
    // ## create method
    // This method is implemented in the source to create a new source item.
    // The method takes two arguments
    // - item - the item to be created.
    // - cb - the callback to be called after creation, this is passed two arguments
    //  - err - if an error is caused by the creation attempt.
    //  - data - a successfully created item.
    // An OnCreate event is triggered after the attempt, it's passed the item as an argument.
    create(item, cb) {
        this.source.create(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnCreate, item, events.OnCreate);
        });        
    }
    
    // ## update method
    // This method is implemented in the source to update a source item.
    // The method takes two arguments
    // - item - the item to be updaed.
    // - cb - the callback to be called after the update, this is passed two arguments
    //  - err - if an error is caused by the update attempt.
    //  - data - a successfully updated item.
    // An OnUpdate event is triggered after the attempt, it's passed the item as an argument.
    update(item, cb) {
        this.source.update(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnUpdate, item, events.OnUpdate);
        });        
    }
    
    // ## remove method
    // This method is implemented in the source to remove a source item.
    // The method takes two arguments
    // - item - the item to be removed.
    // - cb - the callback to be called after the removal, this is passed two arguments
    //  - err - if an error is caused by the removal attempt.
    //  - data - a successfully removed item.
    // An OnRemove event is triggered after the attempt, it's passed the item as an argument.
    remove(item, cb) {
        this.source.remove(item, (err, data)=> {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnRemove, item, events.OnRemove);
        });        
    }
    
    // ## get method
    // This method is implemented in the source to get a source item.
    // The method takes two arguments
    // - item - the item to get.
    // - cb - the callback to be called after attempting to get the item, this is passed two arguments
    //  - err - if an error is caused by the get attempt.
    //  - data - a successfully retrieved item.
    // An OnGet event is triggered after the attempt, it's passed the item as an argument.
    get(item, cb) {
        this.source.get(item, (err, data) => {
            this._doCbIfExists(cb, err, data);
            PubSub.publish(events.OnGet, item, events.OnGet);
        });
    }
    
    // ## onLogin method
    // This method is used as a hook into the OnLogin event.
    // It is passed one argument:
    // - cb - the callback to be called after a login attemp, it's passed the following arguments.
    //  - user - the username of the attempt.
    //  - pass - the password of the attempt.
    onLogin(cb) {
         PubSub.subscribe(events.OnLogin, cb);
    }
    
    // ## onCreate method
    // This method is used as a hook into the OnCreate event.
    // It is passed one argument:
    // - cb - the callback to be called after a create attempt, it's passed the following argument
    //  - item - the item that was attempted to be created.
    onCreate(cb) {
        PubSub.subscribe(events.OnCreate, cb);
    }
    
    // ## onUpdate method
    // This method is used as a hook into the OnUpdate event.
    // It is passed one argument:
    // - cb - the callback to be called after an update attempt, it's passed the following argument
    //  - item - the item that was attempted to be updated.
    onUpdate(cb) {
        PubSub.subscribe(events.OnUpdate, cb);
    }
    
    // ## onRemove method
    // This method is used as a hook into the OnRemove event.
    // It is passed one argument:
    // - cb - the callback to be called after a removal attempt, it's passed the following argument
    //  - item - the item that was attempted to be removed.
    onRemove(cb) {
        PubSub.subscribe(events.OnRemove, cb);
    }
    
    // ## onGet method
    // This method is used as a hook into the OnGet event.
    // It is passed one argument:
    // - cb - the callback to be called after a retrieval attempt, it's passed the following argument
    //  - item - the item that was attempted to be retrieved.
    onGet(cb) {
        PubSub.subscribe(events.OnGet, cb);
    }
    
    // ## _doCBIfExists
    // This method is to be used internally and not meant to be used by consuming modules.
    // This method checks if a callback exists and if so, calls it with err and data arguments passed to it.
    // It take three arguments:
    // - cb - the callback to check and call if exists.
    // - err - an error to be passed to the callback if exists.
    // - data - the data to be passed to the callback if exists.
    _doCbIfExists(cb, err, data) {
        if(cb){
            cb(err, data);
        }
    }
}