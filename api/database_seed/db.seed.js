const mongoose = require('mongoose');
const RUNTIME = require('../constants/runtime.constants');
const User = require('../models/user.schema');
const _ROLES = require('../constants/roles.constants');

// Database: set connection
mongoose.connect('mongodb://localhost:27017/CMS', (err) => {
    if (err) {
        console.log(RUNTIME.DB_INIT_MESSAGE_ERROR);
    }
    console.log(RUNTIME.DB_INIT_MESSAGE);
    clearCollections();
});

// Clear existing collections
function clearCollections() {
    User.remove({}, (err) => {
        if (err) {
            console.log('DB_SEED(Remove User problem): ', err);
            return;
        }
        console.log('DB_SEED(Users collection clear): Success');
        createAdminUser();
    });
}

function createRoles() {

}

// Create admin user
function createAdminUser() {
    const user = {
        firstName: 'Admin',
        lastName: 'Adminiusz',
        email: 'admin@admin.pl',
        login: 'admin',
        birthDate: null,
        address: {
            country: 'Adminowo',
            region: 'Adminowo',
            city: 'Adminowo',
            street: 'Adminowa',
            houseNo: 666,
            postalCode: '66-666'
        },
        active: true,
        roles: []
    };

    _ROLES.forEach(role => {
        user.roles.push(role);
    });

    User.create(user, (err) => {
        if (err) {
            console.log('DB_SEED(Create user problem): ', err);
            return;
        }
        console.log('DB_SEED(Create user success)');
    })
}
