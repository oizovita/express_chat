const express = require("express");
const router = express.Router();
const roomController = require('./room/controller')
const messageController = require('./message/controller')
const {validate} = require('express-validation')
const {roomCreateValidation} = require('./room/requests/create.validation')
const {roomUpdateValidation} = require('./room/requests/update.validation')

const {authenticateToken} = require('../../../helpers/auth')

router.get('/', authenticateToken, roomController.index);

router.get('/:id', authenticateToken, roomController.show);

router.post('/', authenticateToken, validate(roomCreateValidation, {}, {abortEarly: false}), roomController.create);

router.put('/:id', authenticateToken, validate(roomUpdateValidation, {}, {abortEarly: false}), roomController.update);

router.delete('/:id', authenticateToken, roomController.delete);

router.post('/:id/users/:user_id', authenticateToken, roomController.addUser);

router.delete('/:id/users/:user_id', authenticateToken, roomController.deleteUser);


router.get('/:room_id/messages', authenticateToken, messageController.index);

router.get('/:room_id/messages/:id', authenticateToken, messageController.show);

router.post('/:room_id/messages', authenticateToken, messageController.create);

router.put('/:room_id/messages/:id', authenticateToken, messageController.update);

router.delete('/:room_id/messages/:id', authenticateToken, messageController.delete);

module.exports = router;
