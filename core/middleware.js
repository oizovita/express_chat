const bodyParser = require('body-parser')
const cors = require('cors')

exports.init = (app) => {
	app.use(
		bodyParser.urlencoded({
			extended: true
		})
	);
	app.use(bodyParser.json());

	app.use(cors({
		origin: '*',
		optionsSuccessStatus: 200
	}))
}
