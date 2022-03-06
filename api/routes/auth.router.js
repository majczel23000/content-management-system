const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

// POST
router.post('/login', AuthController.login);
router.post('/reset-password', AuthController.resetPassword);

module.exports = router
