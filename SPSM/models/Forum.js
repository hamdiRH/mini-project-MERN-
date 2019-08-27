const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ForumSchema = new Schema({
    user: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    comment: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Forum = mongoose.model('forum', ForumSchema);