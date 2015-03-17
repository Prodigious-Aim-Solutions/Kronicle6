import {DataSource} from './DataSource.js';


export class ArrayDataSource {
    constructor(source, name) {
        this.data = [];
        //super.initialize(source, name);
    }
    
    login(user, pass, cb) {
        this.user = user;
        this.pass = pass;
        cb(null, user, pass);
    }
    
    create(item, cb) {
        this.data.push(item);
        cb(null, item);
    }
    
    update(item, cb) {
        for(let i in this.data){
            if(this.data[i]._id == item._id){
                this.data[i] = item;
                cb(null, this.data[i]);
                return;
            }
        }
        cb(new Error('Item not found in data.'), item);
    }
    
    remove(id, cb) {
        for(let i in this.data){
            if(this.data[i]._id == id){
                this.data.splice(i, 1);
                cb(null, this.data.length);
                return;
            }
        }        
        cb(new Error('Item not found in data.'), id);
    }
    
    get(id, cb) {
        for(let i in this.data){
            if(this.data[i]._id == id) {
                cb(null, this.data[i]);
                return;
            }
        }
        cb(new Error('Item not found in data.'), id);
    }
}