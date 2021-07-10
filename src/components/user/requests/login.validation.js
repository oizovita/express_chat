const Joi = require('joi');

exports.userLoginValidate = {
	body: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required()
	})
}
