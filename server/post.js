var db = require('./db.js');
var ObjectID = require('mongodb').ObjectID;

var post = {};
post.insert = function(post, callback) {
	console.log(post);
	//Config data
	db(function(_db) {
		var collection = _db.collection('post');
		if (post._id) {
			var oid = new ObjectID(post._id);
			delete post._id;
			collection.update({
				_id: oid
			}, post, function() {
				callback(post);
			});
		}
		else {
			post.create_time = (new Date()).getTime();
			post.posted = false;
			collection.insert(post, function() {
				callback(post);
			});
		}
	});
};

post.get = function(condition, callback) {
	db(function(_db) {
		var collection = _db.collection('post');
		collection.find(condition || {}).toArray(function(err, docs) {
			callback(docs);
		});
	});
};

module.exports = post;