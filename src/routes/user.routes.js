const { Router } = require('express');
const { getUserById, getAllUsers, getUserByEmail } = require('../controllers/user.controllers');
const { getUserByIdDTO, getUserByEmailDTO } = require('../dto/users.dto');
const validatorHandler = require('../middlewares/validator.handler');


const router = Router();

router.get('/', getAllUsers);
router.get('/email',validatorHandler(getUserByEmailDTO, 'body'), getUserByEmail);
router.get('/:id',validatorHandler(getUserByIdDTO, 'params'), getUserById);


module.exports = router;
