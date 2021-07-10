const UserRepository = require("./repository");
const bcrypt = require("bcrypt");
const {generateAccessToken} = require('../../../helpers/auth')


exports.signup = async (req, res) => {
	const user = await UserRepository.create(req.body);
	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);

	user
		.save()
		.then((u) => res.status(201).send(u));
}

exports.signin = async (req, res) => {
	const user = await UserRepository.findByEmail(req.body.email);

	if (!user) {
		res.status(401).json({error: "User does not exist"});
	}

	const validPassword = await bcrypt.compare(req.body.password, user.password);

	if (!validPassword) {
		res.status(400).json({error: "Invalid Password"});
	}

	const token = generateAccessToken({id: user._id});
	res.status(200).json({token});
}


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

exports.update = async (req, res) => {
	const user = await UserRepository.update(req.params.id, req.body);

	res.json(user);
}

exports.delete = async (req, res) => {
	await UserRepository.delete(req.params.id);

	res.status(204).send()
}
