const express = require('express');
const usersRouter = require('./users.router');

const app = express();

app.use('/users', usersRouter);

module.exports = app;
