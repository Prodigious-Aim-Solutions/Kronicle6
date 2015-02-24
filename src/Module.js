export class Module {
    constructor(args = {name: ""}) {
        this.name = args.name;
        this.initialize(args);
    }
    
    initialize() {
        // no op, override to add initialization code
    }
}