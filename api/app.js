const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const responseHelper = require('./helpers/response.helper');
const errorConstants = require('./constants/error.constants');
const RUNTIME = require('./constants/runtime.constants');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api.router');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Database: set connection
mongoose.connect('mongodb://localhost:27017/CMS', (err) => {
    if (err) {
        console.log(RUNTIME.DB_INIT_MESSAGE_ERROR);
    }
    console.log(RUNTIME.DB_INIT_MESSAGE);
});

const port = process.env.PORT || RUNTIME.PORT;
app.listen(port);
console.log(`${RUNTIME.APP_INIT_MESSAGE} ${RUNTIME.PORT}`);

// Init routing
app.use('/api', apiRouter);

// Not found routes
app.get('*', (req, res) => {
    res.status(404).json(responseHelper.errorResponse(
        errorConstants.NOT_FOUND.code,
        errorConstants.NOT_FOUND.message,
        errorConstants.NOT_FOUND.name
        ));
});

module.exports = app;
