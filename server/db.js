var db = require('diskdb');

function database(callback) {
	var url = 'mongodb://localhost:27017/chototauto';
	db.connect('./db', ['post', 'account']);
	callback(db);
};

module.exports = database;