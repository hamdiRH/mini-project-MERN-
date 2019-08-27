const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Report = new Schema({
    user: {
        type: String
    },
    Report: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});