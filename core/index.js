const express = require('express');
const middleware = require('./middleware');
const routers = require('./routes');
const {transformError} = require('../helpers/validationErrors')

const port = process.env.PORT || 8080;
const PID = process.pid;

let app = express();

middleware.init(app);

routers.init(app);

app.use(transformError)

app.listen(port, () =>
	console.log(`App started on port ${port} and PID ${PID}`)
);
