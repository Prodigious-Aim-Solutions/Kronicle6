// # Main Kronicle.Module class
// The Module class is used as the base for all modules that are to be added to the Kronicle app.
// The constructor takes an args object that contains one property by default:
// - name - the name of the module.
export class Module {
    constructor(args = {name: ""}) {
        this.name = args.name;
        this.initialize(args);
    }
    
    // ## initialize method
    // This is a no-op that is overriden in an extended Module implementation and is called when the core is initalized
    initialize() {
        
    }
}