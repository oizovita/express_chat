const Joi = require('joi');

exports.userUpdateValidate = {
	body: Joi.object({
		firstName: Joi.string(),
		lastName: Joi.string(),
		email: Joi.string().email(),
	})
}
