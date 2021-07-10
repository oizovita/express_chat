const MessageRepository = require("./repository");

exports.index = async (req, res) => {
	const user = await MessageRepository.findAll(req.params.room_id);

	res.json(user);
}

exports.show = async (req, res) => {
	const room = await MessageRepository.findOne(req.params.id, req.params.room_id);

	if (!room) {
		res.status(404).send()
	}

	res.json(room);
}

exports.create = async (req, res) => {
	const room = await MessageRepository.create(req.body);
	res.json(room);
}

exports.update = async (req, res) => {
	const room = await MessageRepository.update(req.params.id, req.body);

	res.json(room);
}

exports.delete = async (req, res) => {
	await MessageRepository.delete(req.params.id);

	res.status(204).send()
}
