import {Module} from '../Module.js';

export class Controller extends Module {
    constructor (args = {model: {}, view: {}, name: ''}) {
        this.model = args.model;
        this.view = args.view;
        super({name: args.name + 'Controller'});
    }
}