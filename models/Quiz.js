const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: Array,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },

    sub_category: {
        type: String,
        required: true,
    }


})
const Quiz = mongoose.model('Quiz', UserSchema);
module.exports = Quiz;