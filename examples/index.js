var kronApp = require('./mvc').kronApp;

var http = require('http');
console.log('start server');
kronApp.start(function() {
    console.log(this);
    var app = this;

    http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(app.core.addedModules.ListItemsController.view.render());
        
    }).listen(3000, '0.0.0.0');

});