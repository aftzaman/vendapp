var mongoose = require('mongoose');

module.exports.categorySchema = new mongoose.Schema({
	'name': String,
	'createdAt': {type: Date, required: true, default: Date.now()}
});