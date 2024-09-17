const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    sub_category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,

    }



})
const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;