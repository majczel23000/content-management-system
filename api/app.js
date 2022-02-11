const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const responseHelper = require('./helpers/response.helper');
const errorConstants = require('./constants/error.constants');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api.router');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Database: set connection
mongoose.connect('mongodb://localhost:27017/CMS', (err, response) => {
    if (err) {
        console.log("ERROR: Database connection not working");
    }
    console.log("DB: Connection has been added.");
});

const port = process.env.PORT || '3000';
app.listen(port);
console.log(`Server is running on port: ${port}`);

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.status(404).json(responseHelper.errorResponse(
        errorConstants.NOT_FOUND.code,
        errorConstants.NOT_FOUND.message,
        errorConstants.NOT_FOUND.name
        ));
});

module.exports = app;
