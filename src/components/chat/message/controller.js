const MessageRepository = require("./repository");

exports.index = async (req, res) => {
	const messages = await MessageRepository.findAll(req.params.room_id);

	res.json(messages);
}

exports.show = async (req, res) => {
	const room = await MessageRepository.findOne(req.params.id, req.params.room_id);

	if (!room) {
		res.status(404).send()
	}

	res.json(room);
}

exports.create = async (req, res) => {
	const message = await MessageRepository.create(req.body);

	message.room = req.params.room_id
	message.owner = req.user.id

	message
		.save()
		.then((u) => res.status(200).send(message));
}

exports.update = async (req, res) => {
	const room = await MessageRepository.update(req.params.id, req.params.room_id, req.user.id, req.body);

	res.json(room);
}

exports.delete = async (req, res) => {
	await MessageRepository.delete(req.params.id, req.params.room_id, req.user.id);

	res.status(204).send()
}
