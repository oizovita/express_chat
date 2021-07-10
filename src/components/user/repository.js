const User = require('./model');

exports.findAll = async () => {
	return User.find({}).exec();
}

exports.findById = async (id) => {
	return User.findById(id).exec();
}

exports.findByEmail = async (email) => {
	return User.findOne({ email }).exec();
}

exports.create = async (user) => {
	return User.create(user);
}

exports.update = async (id, user) => {
	return User.findOneAndUpdate({_id: id}, user, {new: true}).exec();
}

exports.delete = async (id) => {
	return User.deleteOne({_id: id}).exec();
}
