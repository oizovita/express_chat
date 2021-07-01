const express = require('express');
const middleware = require('./middleware');
const routers = require('./routes');

const port = process.env.PORT || 8080;
const PID = process.pid;

let app = express();

middleware.init(app);

routers.init(app);

app.listen(port, () =>
	console.log(`App started on port ${port} and PID ${PID}`)
);
