const RoomRepository = require("./repository");

exports.index = async (req, res) => {
	const room = await RoomRepository.findAll();

	res.json(room);
}

exports.show = async (req, res) => {
	const room = await RoomRepository.findById(req.params.id);

	if (!room) {
		res.status(404).send()
	}

	res.json(room);
}

exports.create = async (req, res) => {
	const room = await RoomRepository.create(req.body);

	room.owner = req.user.id;

	room
		.save()
		.then((u) => res.status(201).send(room));
}

exports.update = async (req, res) => {
	const room = await RoomRepository.update(req.params.id, req.body);

	if (!room) {
		res.status(404).send()
	}

	res.json(room);
}

exports.delete = async (req, res) => {

	const room = await RoomRepository.delete(req.params.id,);

	if (!room) {
		res.status(404).send()
	}

	res.status(204).send()
}

exports.addUser = async (req, res) => {

	const room = await RoomRepository.findById(req.params.id,);

	if (!room) {
		res.status(404).send()
	}

	room.users.addToSet(req.params.user_id)

	room
		.save()
		.then((u) => res.status(200).send(room));
}

exports.deleteUser = async (req, res) => {
	const room = await RoomRepository.findById(req.params.id);

	if (!room) {
		res.status(404).send()
	}

	room.users = room.users.filter(v => {
		v !== req.params.user_id
	})

	room
		.save()
		.then((u) => res.status(200).send(room));
}
