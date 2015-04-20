var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var https = require('https');
var post = require('./post.js');
var account = require('./account.js');
var bodyParser = require('body-parser');

http.ServerResponse.prototype.respond = function(content, status) {
	if ('undefined' == typeof status) { // only one parameter found
		if ('number' == typeof content || !isNaN(parseInt(content, 10))) { // usage "respond(status)"
			status = parseInt(content, 10);
			content = undefined;
		} else { // usage "respond(content)"
			status = 200;
		}
	}
	if (status != 200) { // error
		content = {
			"code": status,
			"status": http.STATUS_CODES[status],
			"message": content && content.toString() || null
		};
	}
	this.setHeader('Content-Type', 'application/json');
	this.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	this.setHeader("Pragma", "no-cache");
	this.setHeader("Expires", 0);
	this.send(content, status);
};

app.use(bodyParser.json({
	limit: '50mb'
}));
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));
app.use(bodyParser());

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/image/:name', function(req, res) {
	var b64string = req.params.name;
	var filePath = new Buffer(b64string, 'base64').toString();
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

app.get('/script.js', function(req, res) {
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

app.post('/api/post/update', function(req, res) {
	post.insert(req.param('data'), function(result) {
		res.respond(result);
	});
});

app.post('/api/post/get/:phone', function(req, res) {
	post.get({phone: req.params.phone}, function(result) {
		res.respond(result);
	});
});

app.get('/api/post/next', function(req, res) {
	post.next(function(data) {
		if (data) {
			res.respond(data);
		} else {
			res.end();
		}
	});
});
app.get('/api/post/done/:id', function(req, res) {
	if (req.params.id) {
		post.done(req.params.id, function() {
			res.respond(true);
		});
	} else {
		req.end();
	}
});

app.get('/api/post/delete/:id', function(req, res) {
	if (req.params.id) {
		post.delete(req.params.id, function() {
			res.respond(true);
		});
	} else {
		req.end();
	}
});
app.post('/api/account/update', function(req, res) {
	account.insert(req.param('data'), function(result) {
		res.respond(result);
	});
});
app.post('/api/account/get', function(req, res) {
	account.get(req.param('data'), function(result) {
		res.respond(result);
	});
});
app.get('/api/account/delete/:id', function(req, res) {
	if (req.params.id) {
		account.delete(req.params.id, function() {
			res.respond(true);
		});
	} else {
		req.end();
	}
});

app.use('/client', express.static(__dirname + '/client'));

var key = fs.readFileSync('./ssl/key.pem');
var cert = fs.readFileSync('./ssl/key.crt')
var credentials = {
	key: key,
	cert: cert
};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3300);