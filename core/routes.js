const UserRouter = require('../src/components/user/router');
const RoomRouter  = require('../src/components/chat/router')

exports.init = (app) => {
	app.use('/api/users', UserRouter)
	app.use('/api/rooms', RoomRouter)
}
