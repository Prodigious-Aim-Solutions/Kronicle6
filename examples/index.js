var kronApp = require('./mvc').kronApp;

var http = require('http');

kronApp.start(function(app) {

    http.createServer(function (req, res) {
        console.log('start server');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(app.ListItemsController.view.render(null, 'thing'));
        
    }).listen(3000, '0.0.0.0');

});