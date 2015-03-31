// # Kronicle.ArrayDataSource class
// This class is a simple native array based DataSource implementation
// The constructor initializes one property:
// - data - an empty array
export class ArrayDataSource {
    constructor() {
        this.data = [];
    }
    
    // ## login method
    // Sets the user and pass properites.
    // Takes three arguments:
    // - user - the username.
    // - pass - the password.
    // - cb - the callback to be called once the properties are set, takes three arguments
    //  - err - a null object in this case.
    //  - user - the user argument.
    //  - pass - the pass argument.
    login(user, pass, cb) {
        this.user = user;
        this.pass = pass;
        cb(null, user, pass);
    }
    
    // ## create method
    // Pushes an item into the array as a create function.
    // Takes two arguments
    // - item - the item to push onto the array
    // - cb - the callback to be called once item is added, takes two arguments
    //  - err - a null object in this case
    //  - item - the created(added) item
    create(item, cb) {
        this.data.push(item);
        cb(null, item);
    }
    
    // ## update method
    // Updates an item in the array
    // Takes two arguments
    // - item - the item to update from the array
    // - cb - the callback to be called once the item is updated, takes two arguments
    //  - err - and error object
    //  - item - the item
    update(item, cb) {
        for(let i in this.data){
            if(this.data[i]._id == item._id){
                this.data[i] = item;
                cb(null, this.data[i]);
                return;
            }
        }
        cb(new Error('Item not found in data.'), item);
    }
    
    // ## remove method
    // Removes an item in the array
    // Takes two arguments
    // - item - the item to remove from the array
    // - cb - the callback to be called once the item is removed, takes two arguments
    //  - err - and error object
    //  - length/id - the length if the item is removed or the id if an error occurs
    remove(id, cb) {
        for(let i in this.data){
            if(this.data[i]._id == id){
                this.data.splice(i, 1);
                cb(null, this.data.length);
                return;
            }
        }        
        cb(new Error('Item not found in data.'), id);
    }
    
    // ## get method
    // Gets an item in the array
    // Takes two arguments
    // - id - the id to get from the array
    // - cb - the callback to be called once the item is retrieved, takes two arguments
    //  - err - and error object
    //  - item/id - the item retrieved or the id that was attempted in error
    get(id, cb) {
        for(let i in this.data){
            if(this.data[i]._id == id) {
                cb(null, this.data[i]);
                return;
            }
        }
        cb(new Error('Item not found in data.'), id);
    }
}