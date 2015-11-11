var mongoose = require('mongoose');

module.exports.offer = new mongoose.Schema({
	'title': {type: String, required: true},
	'description': {type: String, required: true},	
	'category': {type: String, required: true},
	'location': {
		'latitute': {type: String, required: true},
		'longitute': {type: String, required: true},
		'name' : {type: String, required: true}
	},
	'validFrom': {type: Date, required: true, default: Date.now()},
	'validTill': {type: Date, required: true},
	'image': {type: Array, required: true},
	'createdAt': {type: Date, required: true, default: Date.now()}
});