const Joi = require('joi');

exports.messageUpdateValidation = {
	body: Joi.object({
		text: Joi.string().min(1).required(),
	})
}
