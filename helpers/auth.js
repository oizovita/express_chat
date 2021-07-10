const jwt = require('jsonwebtoken');

exports.generateAccessToken = (id) => {
	return jwt.sign(id, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
}

exports.authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403)
		console.log(user)
		req.user = user

		next()
	})
}
