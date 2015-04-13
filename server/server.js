var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var https = require('https');
var post = require('./post.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser());

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

app.post('/api/post', function (req, res) {
    post(req.param('data'), function() {
        res.end();
    });
});

app.use('/client', express.static(__dirname + '/client'));

var key = fs.readFileSync('./ssl/key.pem');
var cert = fs.readFileSync('./ssl/key.crt')
var credentials = {key: key, cert: cert};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3300);