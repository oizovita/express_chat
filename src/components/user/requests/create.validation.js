const Joi = require('joi');

exports.validate = function (user) {
	return Joi.object({
		firsName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().email().required(),
	}).validate(user);
}
