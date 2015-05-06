require("babel/polyfill");
import {Module} from '../Module.js';

// # Kronicle.View class
// depends: [Kronicle.Module](Module.html)
// The module used for rendering main views. An array of smaller components are usually used to make up a view.
// The constructor takes an args object that has the following two properties:
// - template - a function that returns a string
// - components - an array of Kronicle Components
export class View extends Module {
    constructor (args){
        this.template = args.template || () => { return ""};
        this.components = []
        if(args.components){
            this.addComponents(args.components);
        }
        super({name: args.name + 'View'});
    }
    
    // ## render method
    // The render method passes any data avaialbe to a template and returns the rendered string
    // Takes two arguments
    // - err - an error that occured in the parent function
    // - data - the data to be passed to template
    render(err, data) {
        if(!err) {
            return this.template(data);
        }
    }
    
    // ## addComponents method
    // The method used to add an array of Kronicle Components to the View
    // Takes one argument:
    // - components - an array of Kronicle Components
    addComponents (components) {
        for(let component of components){
            this.addComponent(component);
        }
    }
    
    // ## addComponent method
    // The method used to add a single Kronicle Component to the View
    // Takes one argument:
    // - component
    addComponent (component){
        this.components[component.name.split('Component')[0]] = component;
    }
}