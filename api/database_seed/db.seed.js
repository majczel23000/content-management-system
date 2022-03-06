const mongoose = require('mongoose');
const RUNTIME = require('../constants/runtime.constants');
const User = require('../models/user.schema');
const Role = require('../models/role.schema');
const _ROLES = require('../constants/roles.constants');
const bcrypt = require('bcryptjs');

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
   Promise.all([clearUsersPromise, clearRolesPromise]).then(res => {
       if (res[0] && res[1]) {
           createCollections();
       }
   });
}

// Clear Users Promise
const clearUsersPromise = new Promise((resolve, reject) => {
    User.remove({}, (err) => {
        if (err) {
            console.log('DB_SEED(Remove User problem): ', err);
            reject(false);
        }
        console.log('DB_SEED(Users collection clear): Success');
        resolve(true);
    });
});

// Clear Roles Promise
const clearRolesPromise = new Promise((resolve, reject) => {
    Role.remove({}, (err) => {
        if (err) {
            console.log('DB_SEED(Remove Role problem): ', err);
            reject(false);
        }
        console.log('DB_SEED(Roles collection clear): Success');
        resolve(true);
    });
});

// Init creating collections
function createCollections() {
    Promise.all([createRolesPromise, createAdminUserPromise]).then(res => {
        console.log(res);
    })
}

// Create Roles Promise
const createRolesPromise = new Promise((resolve, reject) => {
    _ROLES.forEach(group => {
        group.roles.forEach(role => {
            Role.create(role, (err) => {
                if (err) {
                    console.log('DB_SEED(Create role problem): ', err);
                    reject(false);
                }
            });
        });
    });
    console.log('DB_SEED(Create roles success): ');
    resolve(true);
});

// Create admin user Promise
const createAdminUserPromise = new Promise((resolve, reject) => {
    const user = {
        firstName: 'Admin',
        lastName: 'Adminiusz',
        email: 'admin@admin.pl',
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
        roles: [],
        password: 'default'
    };

    _ROLES.forEach(group => {
        group.roles.forEach(role => {
            user.roles.push(role.code);
        })
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('admin', salt, (err, hash) => {
            user.password = hash;
            User.create(user, (err) => {
                if (err) {
                    console.log('DB_SEED(Create user problem): ', err);
                    reject(false);
                }
                console.log('DB_SEED(Create user success)');
            });
            resolve(true);
        });
    });
})