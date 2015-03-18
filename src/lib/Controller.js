import {Module} from '../Module.js';

// # Kronicle.Controller class
// This class is used to handle events from users and dispatch the proper response via view and model.
// The constructor takes an args object which contains the following properties:
// - model - the data model associated with the controller.
// - view - the Kronicle View associated withe the controller.
// - name - the name of the Controller.
export class Controller extends Module {
    constructor (args = {model: {}, view: {}, name: ''}) {
        this.model = args.model;
        this.view = args.view;
        this.initialize = args.initialize || super.initialize;
        this.initialize = this.initialize.bind(this);
        super({name: args.name + 'Controller'});
    }
}