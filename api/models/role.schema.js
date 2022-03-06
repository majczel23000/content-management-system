const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    description: String,
    code: String,
    active: Boolean
});

module.exports = mongoose.model('Role', RoleSchema);
