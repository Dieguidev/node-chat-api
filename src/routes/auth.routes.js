const { register, login } = require("../controllers/auth.controller");
const { Router } = require('express');
const validatorHandler = require("../middlewares/validator.handler");
const { registerDTO, loginDTO } = require("../dto/auth.dto");


const router = Router();

router.post('/register',validatorHandler(registerDTO, 'body'), register);
router.post('/login',validatorHandler(loginDTO, 'body'), login);


module.exports = router;
