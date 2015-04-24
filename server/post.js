var db = require('./db.js');

var post = {};
post.insert = function(post, callback) {
	db(function(_db) {
		if (post._id) {
			var id = post._id;
			delete post._id;
			_db.post.update({
				_id: id
			}, post);
			callback(post);
		} else {
			post.create_time = (new Date()).getTime();
			post.posted = false;
			_db.post.save(post);
			callback(post);
		}
	});
};

post.get = function(condition, callback) {
	db(function(_db) {
		callback(_db.post.find(condition || {}));
	});
};

post.next = function(callback) {
	db(function(_db) {
		var posts = _db.post.find({
			posted: false
		});

		var postsMin = [];
		posts.forEach(function(p) {
			for (var i = 0; i < p.post_times.length; i++) {
				if (p.post_times[i].m && !p.post_times[i].p) {
					p.pmin = p.post_times[i];
					postsMin.push(p);
					break;
				}
			}
		});
		postsMin = postsMin.sort(function(p1, p2) {
			return p1.pmin.t - p2.pmin.t;
		});
		callback(postsMin[0]);
	});
};

post.done = function(id_time, callback) {
	db(function(_db) {
		var id = id_time.split("_")[0];
		var time = id_time.split("_")[1];
		var post = _db.post.findOne({
			_id: id
		});
		var count = 0;
		for (var i = 0; i < post.post_times.length; i++) {
			if (post.post_times[i].t == time) {
				post.post_times[i].p = true;
			}

			if (post.post_times[i].m && !post.post_times[i].p) {
				count++;
			}
		}
		if (count == 0) {
			post.posted = true;
		}
		_db.post.update({
			_id: id
		}, post);
		callback();
	});
};

post.delete = function(id, callback) {
	db(function(_db) {
		_db.post.remove({
			_id: id
		});
		callback();
	});
};

module.exports = post;