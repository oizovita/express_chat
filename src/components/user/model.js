const mongoose = require('mongoose');
const connections = require('../../../config/db');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		room: {
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
			ref: 'Room'
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'users',
		versionKey: false,
	},
);

UserSchema.methods.toJSON = function () {
	let obj = this.toObject();
	delete obj.password;
	return obj;
}

module.exports = connections.model('User', UserSchema);
