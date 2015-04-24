var db = require('./db.js');

var account = {};
account.insert = function(acc, callback) {
	db(function(_db) {
		if (acc._id) {
			var id = acc._id;
			delete acc._id;
			_db.account.update({
				_id: id
			}, acc, function() {
				callback(acc);
			});
		} else {
			acc._id = undefined;
			acc.create_time = (new Date()).getTime();
			acc.posted = false;
			_db.account.save(acc);
			callback(acc);
		}
	});
};

account.get = function(condition, callback) {
	db(function(_db) {
		callback(_db.account.find(condition));
	});
};

account.delete = function(id, callback) {
	db(function(_db) {
		_db.account.remove({
			_id: id
		});
		callback();
	});
};

module.exports = account;