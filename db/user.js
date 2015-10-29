var mongoose = require('mongoose');

module.exports.userSchema = new mongoose.Schema({	
	email: {type: String, required: true, unique: true},
	name: {type: String, required: true},
    mobile: {type: Number},
	role: {type: String, default: 'user'},
	password: {type: String, required: false},
	verified: {type: Boolean, default: true},
    image: {type: Buffer},
    imageFormat: {type: String},
	createdAt: {type: Date, default: Date.now()}
});