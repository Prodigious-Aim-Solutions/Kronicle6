import {Module} from '../Module.js';
import { default as util } from 'util';

export class Component extends Module {
    constructor (args = {components: [], template: () => { return "" }, name: ""}) {
        this.template = args.template;
        this.modules = {
            components: {}
        };
        if(args.components) {
            this.addComponents(args.components);
        }
        super({name: args.name + 'Component'});
        
    }
    
    render (err, data) {
        if(!err) {
            return this.template(data);
        }
    }

    addComponents(components) {
        var aryComponents = components;
        if(!(components instanceof Array)){
            aryComponents = [components];
        }
        this.components = components;
        for(var index in aryComponents){
            if(aryComponents[index].name) {
                this.addComponentModule(aryComponents[index]);
            } else {
                throw new Error('Error: components must have a unique name');
            }
        }
    }

    addComponentModule(component) {
        this.modules.components[component.name] = component
    }
}