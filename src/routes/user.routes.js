const { Router } = require('express');
const {
  getUserById,
  getAllUsers,
  getUserByEmail,
  updateUser,
} = require('../controllers/user.controllers');
const {
  getUserByIdDTO,
  getUserByEmailDTO,
  updateUserDTO,
} = require('../dto/users.dto');
const validatorHandler = require('../middlewares/validator.handler');
const { verifyTokenAndAdmin } = require('../middlewares/verifytoken');


const router = Router();

router.get('/',verifyTokenAndAdmin, getAllUsers);
router.get(
  '/email',
  validatorHandler(getUserByEmailDTO, 'body'),
  getUserByEmail,
);
router.get('/:id', validatorHandler(getUserByIdDTO, 'params'), getUserById);
router.put(
  '/:id',
  validatorHandler(updateUserDTO, 'body'),
  validatorHandler(getUserByIdDTO, 'params'),
  updateUser,
);

module.exports = router;
