const User = require('../models/user.schema');
const responseHelper = require('../helpers/response.helper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const runtime = require('../constants/runtime.constants');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // TODO: Create generic required fields validator and replace below validation
        if(!(email && password)) {
            res.status(400).json(responseHelper.errorResponse(400, 'Fill in all required fields: email and password', 'VALIDATION_ERROR'));
        }
        var user = await User.findOne({ email }).lean();
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user },
                runtime.JWT_PRIVATE_KEY
            );
            user.token = token;
            delete user.password;
            res.status(200).json(user);
        }
        res.status(400).json(responseHelper.errorResponse(400, 'Invalid credentials', 'LOGIN_ERROR'));
    } catch (err) {
        console.log(err);
    }
}

exports.resetPassword = (req, res) => {
    res.status(200).json({'ok':'ok'});
}
