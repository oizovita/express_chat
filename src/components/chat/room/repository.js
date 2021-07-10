const Room = require('./model');

exports.findAll = async () => {
	return Room.find({}).exec();
}

exports.findById = async (id) => {
	return Room.findById(id).populate('users').populate('owner').exec();
}

exports.create = async (user) => {
	return Room.create(user);
}

exports.update = async (_id, ownerId, user) => {
	return Room.findOneAndUpdate({_id, ownerId}, user, {new: true}).exec();
}

exports.delete = async (_id, ownerId) => {
	return Room.deleteOne({_id, ownerId}).exec();
}

exports.findAllByOwnerId = async (ownerId) => {
	return Room.find({ownerId}).populate('users').populate('owner').exec();
}

exports.findByOwnerId = async (owner) => {
	return Room.findOne({owner}).populate('users').populate('owner').exec();
}
