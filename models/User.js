const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: {
        type: String,
        default: null
    },
    expireToken: {
        type: Date,
        default: null
    },
    last_payment: {
        type: String,
        default: null,
    },
    next_payment: {
        type: String,
        default: null,
    },
    google_token: {
        type: String,
        default: null,
    },
    date: {
        type: Date,
        default: Date.now,
    }

})
const User = mongoose.model('User', UserSchema);
module.exports = User;