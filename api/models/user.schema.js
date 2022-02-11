import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    login: String,
    birthDate: String,
    address: {
        country: String,
        region: String,
        city: String,
        street: String,
        houseNo: Number,
        postalCode: String
    }
});

export default mongoose.model('User', UserSchema);
