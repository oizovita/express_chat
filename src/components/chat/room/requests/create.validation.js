const Joi = require('joi');

exports.roomCreateValidation = {
	body: Joi.object({
		title: Joi.string().min(3).max(10).required(),
		description: Joi.string()
	})
}
