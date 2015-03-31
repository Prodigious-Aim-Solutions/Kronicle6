// # index.js used to create app and server.
// See [mvc.js](mvc.html) for required kronApp.
var kronApp = require('./mvc').kronApp;

var http = require('http');

// Use start event to boot up server with app when Kronicle ready.
kronApp.start(function(app) {
    // Create server.
    http.createServer(function (req, res) {
        console.log('start server');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        // Render the view with thing as the data for an example.
        res.end(app.ListItemsController.view.render(null, 'thing'));
        
    }).listen(3000, '0.0.0.0');

});