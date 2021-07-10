const Joi = require('joi');

exports.userRegistrationValidate = {
	body: Joi.object({
		username: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required()
	})
}
