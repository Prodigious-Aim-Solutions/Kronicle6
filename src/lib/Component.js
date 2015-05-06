require("babel/polyfill");
import {Module} from '../Module.js';

// # Kronicle.Component class
// depends: [Kronicle.Module](Module.html)
// The Component class is used to create components which are added to Views or other components.
// A component is a small, reusable module implementation.
// The constructor takes an args object that contains the properties:
// - components - an array of components
// - template - a function that returns a string
// - name - the name of the component - will have Component appeded to it during initialization
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
    
    // ## render method
    // The render method passes any data avaialbe to a template and returns the rendered string
    // Takes two arguments
    // - err - an error that occured in the parent function
    // - data - the data to be passed to template
    render (err, data) {
        if(!err) {
            return this.template(data);
        }
    }

    // ## addComponents method
    // This medthod add sub-components to the component, use this method to build a component with other components.
    // Takes one argument:
    // - components - an array of Kronicle Components
    addComponents(components) {
        var aryComponents = components;
        if(!(components instanceof Array)){
            aryComponents = [components];
        }
        this.components = components;
        for(let component of aryComponents){
            if(component.name) {
                this.addComponentModule(component);
            } else {
                throw new Error('Error: components must have a unique name');
            }
        }
    }

    // ## addComponentModule method
    // This method adds an individual sub-component to the component.
    // Takes one argument:
    // - component - a Kronicle Component
    addComponentModule(component) {
        this.modules.components[component.name] = component
    }
}