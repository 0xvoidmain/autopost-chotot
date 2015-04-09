var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var https = require('https');

app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});
app.get('/', function (req, res) {
  	var filePath = "./images/xemay.jpg";
    var stat = fs.statSync(filePath);
    
    res.writeHead(200, {
        'Content-Type': 'image/png', 
        'Content-Length': stat.size
    });
    
    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
        res.write(data);
    });
    
    readStream.on('end', function() {
        res.end();        
    });
});
app.get('/script.js', function (req, res) {
   	var filePath = './script.js';
    var stat = fs.statSync(filePath);
    
    res.writeHead(200, {
        'Content-Type': 'text/javascript', 
        'Content-Length': stat.size
    });
    
    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
        res.write(data);
    });
    
    readStream.on('end', function() {
        res.end();        
    });
});

app.use('/client', express.static(__dirname + '/client'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// your express configuration here
// var key = fs.readFileSync('./key.pem');
// var cert = fs.readFileSync('./cert.pem')
// var credentials = {key: key, cert: cert};
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(3000);
// httpsServer.listen(443);