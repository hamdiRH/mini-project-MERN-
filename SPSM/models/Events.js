const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img:{
        type: String
    },
    ctn: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Event = mongoose.model('event', EventSchema);