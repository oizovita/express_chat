const Joi = require('joi');

exports.roomUpdateValidation = {
	body: Joi.object({
		title: Joi.string().min(3).max(10),
		description: Joi.string(),
	})
}
