var db = require('./db.js');
var ObjectID = require('mongodb').ObjectID;

var post = {};
post.insert = function(post, callback) {
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
		} else {
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

post.done = function(id, callback) {
	db(function(_db) {
		var collection = _db.collection('post');
		var oid = new ObjectID(id);
		collection.update({
			_id: oid
		}, {
			$set: {
				posted: true
			}
		}, function() {
			callback();
		});
	});
};

post.delete = function(id, callback) {
	db(function(_db) {
		var collection = _db.collection('post');
		var oid = new ObjectID(id);
		collection.remove({
			_id: oid
		}, function() {
			callback();
		});
	});
};

module.exports = post;