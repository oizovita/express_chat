const express = require("express");
const router = express.Router();
const controller = require('./controller')
const { validate } = require('express-validation')
const {userUpdateValidate} = require("./requests/update.validation");
const {userRegistrationValidate} = require("./requests/registration.validation");
const {userLoginValidate} = require("./requests/login.validation");

router.route('/').get(controller.index);

router.get("/:id", controller.show);

router.post("/signup", validate(userRegistrationValidate,{},{abortEarly:false}), controller.signup);

router.post("/signin", validate(userLoginValidate,{},{abortEarly:false}), controller.signin);

router.put("/:id", validate(userUpdateValidate,{},{abortEarly:false}), controller.update);

router.delete("/:id", controller.delete);

module.exports = router;
