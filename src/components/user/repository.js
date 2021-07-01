const User = require('./model');

exports.findAll = async () => {
	return User.find({}).exec();
}

exports.findById = async (id) => {
	return User.findById(id).exec();
}

exports.create = async (user) => {
	return User.create(user);
}

exports.update = async (id, user) => {
	return User.updateOne({ _id: id }, user).exec();
}

exports.delete = async (id) => {
	return User.deleteOne({ _id: id }).exec();
}
