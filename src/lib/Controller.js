import {Module} from '../Module.js';

export class Controller extends Module {
    constructor (args = {model: {}, view: {}, name: ''}) {
        this.model = args.model;
        this.view = args.view;
        this.initialize = args.initialize || super.initialize;
        this.initialize = this.initialize.bind(this);
        super({name: args.name + 'Controller'});
    }
}