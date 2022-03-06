const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthDate: String,
    address: {
        country: String,
        region: String,
        city: String,
        street: String,
        houseNo: Number,
        postalCode: String
    },
    active: Boolean,
    roles: [String],
    info: {
        createdAt: {
            type: Date,
            default: new Date
        },
        updatedAt: {
            type: Date,
            default: new Date
        },
        deletedAt: {
            type: Date,
            default: null
        }
    },
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
