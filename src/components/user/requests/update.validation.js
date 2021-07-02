const Joi = require('joi');

exports.validate = function (user){
	return Joi.object({
		firsName: Joi.string(),
		lastName: Joi.string(),
		email: Joi.string().email(),
	}).validate(user);
}
