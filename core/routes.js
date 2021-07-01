const UserRouter = require('../src/components/user/router');

exports.init = (app) => {
	app.use('/api/users', UserRouter)
}
