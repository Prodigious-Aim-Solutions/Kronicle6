import {Module} from '../Module.js';

export class View extends Module {
    constructor (args){
        this.template = args.template || () => { return ""};
        this.components = []
        if(args.components){
            this.addComponents(args.components);
        }
        super({name: args.name + 'View'});
    }
    
    render(err, data) {
        if(!err) {
            return this.template(data);
        }
    }
    
    addComponents (components) {
        for(var i in components){
            this.addComponent(components[i]);
        }
    }
    
    addComponent (component){
        this.components[component.name.split('Component')[0]] = component;
    }
}