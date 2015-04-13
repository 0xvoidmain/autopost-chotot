var MongoClient = require('mongodb').MongoClient;

function db(callback) {
	var isConnected = false;
	var url = 'mongodb://localhost:27017/chototauto';
	if (!isConnected) {
		MongoClient.connect(url, function(err, db) {
			if (db) {
				callback(db);
			}
		});
	}
};

module.exports = db;