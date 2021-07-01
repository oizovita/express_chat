const mongoose  = require('mongoose');
const connections = require('../../../config/db');

const UserSchema = new mongoose.Schema(
	{
		firsName: {
			type: String,
			trim: true,
		},
		lastName: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'users',
		versionKey: false,
	},
);

module.exports = connections.model('User', UserSchema);
