const Room = require('./model');

exports.findAll = async () => {
	return Room.find({}).exec();
}

exports.findById = async (_id) => {
	return Room.findOne({_id}).populate(['users', 'owner']).exec();
}

exports.create = async (room) => {
	return Room.create(room);
}

exports.update = async (_id, ownerId, room) => {
	return Room.findOneAndUpdate({_id}, room, {new: true}).exec();
}

exports.delete = async (_id) => {
	return Room.deleteOne({_id}).exec();
}
