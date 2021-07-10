const {ValidationError} = require('express-validation')

exports.transformError = function (err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(422).json(err)
	}

	return res.status(500).json(err)
}
