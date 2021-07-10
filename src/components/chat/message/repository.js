const Message = require('./model');

exports.findAll = async (room) => {
	return Message.find({room}).exec();
}

exports.findOne = async (_id, room) => {
	return Message.findOne({_id, room}).exec();
}

exports.create = async (message) => {
	return Message.create(message);
}

exports.update = async (_id, room, message) => {
	return Message.findOneAndUpdate({_id, room}, message, {new: true}).exec();
}

exports.delete = async (id, room) => {
	return Message.deleteOne({_id: id}).exec();
}
