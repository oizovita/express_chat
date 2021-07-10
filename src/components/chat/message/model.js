const mongoose  = require('mongoose');
const connections = require('../../../../config/db');

const MessageSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			trim: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
			ref: 'User'
		},
		room:[{
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
			ref: 'Room'
		}]

	},
	{
		collection: 'messages',
		versionKey: false,
	},
);

module.exports = connections.model('Message', MessageSchema);
