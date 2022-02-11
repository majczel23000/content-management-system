const express = require('express');
const UsersController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', UsersController.getAllUsers)

module.exports = router
