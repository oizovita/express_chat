const mongoose  = require('mongoose');
const connections = require('../../../../config/db');

const RoomSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
			ref: 'User'
		},
		description: {
			type: String,
			trim: true,
		},
		users:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]

	},
	{
		collection: 'rooms',
		versionKey: false,
	},
);

module.exports = connections.model('Room', RoomSchema);
