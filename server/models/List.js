const { Schema, model } = require('mongoose');

const listSchema = new Schema({
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

const List = model('List', listSchema);

module.exports = User;