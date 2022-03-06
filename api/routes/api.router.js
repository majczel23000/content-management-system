const express = require('express');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

const app = express();

app.use('/users', usersRouter);
app.use('/auth', authRouter);

module.exports = app;
