const express = require('express');
const UsersController = require('../controllers/user.controller');

const router = express.Router();

// GET
router.get('/', UsersController.getAllUsers)
router.get('/:id', UsersController.getUserById)

// POST
router.post('/', UsersController.createUser)

// PUT
router.put('/:id', UsersController.modifyUserById)
router.put('/:id/activate', UsersController.activateUserById)
router.put('/:id/deactivate', UsersController.deactivateUserById)

// DELETE
router.delete('/:id', UsersController.deleteUserById)

module.exports = router
