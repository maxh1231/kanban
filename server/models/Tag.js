const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;