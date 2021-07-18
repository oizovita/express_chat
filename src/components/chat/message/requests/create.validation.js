const Joi = require('joi');

exports.messageCreateValidation = {
	body: Joi.object({
		text: Joi.string().min(1).required(),
	})
}
