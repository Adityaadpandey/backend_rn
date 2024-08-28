const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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
const CssNote = mongoose.model('CssNote', NoteSchema);
module.exports = CssNote;