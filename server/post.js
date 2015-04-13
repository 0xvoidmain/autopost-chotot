var db = require('./db.js');
function post(post, callback) {
	db(function(_) {
		console.log(post);
		var collection = _.collection('post');
		collection.insert(post, callback);
	});
}

module.exports = post;