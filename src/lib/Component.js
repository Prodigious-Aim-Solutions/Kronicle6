import {Module} from '../Module.js';

export class Component extends Module {
    constructor (args) {
        this.components = args.components || [];
        this.template = args.template || () => { return "" };
        super({name: args.name + 'Component'});
    }
    
    render (err, data) {
        if(!err) {
            return this.template(data);
        }
    }
}