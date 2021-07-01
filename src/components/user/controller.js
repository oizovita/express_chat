const UserRepository = require("./repository");

exports.index = async (req, res) => {
	const user = await UserRepository.findAll();

	res.json(user);
}

exports.show = async (req, res) => {
	const user = await UserRepository.findById(req.params.id);

	if (!user) {
		res.status(404).send()
	}

	res.json(user);
}

exports.create = async (req, res) => {
	const user = await UserRepository.create(req.body);

	res.json(user);
}

exports.update = async (req, res) => {
	const user = await UserRepository.update(req.params.id, req.body);

	res.json(user);
}

exports.delete = async (req, res) => {
	await UserRepository.delete(req.params.id);

	res.status(204).send()
}
