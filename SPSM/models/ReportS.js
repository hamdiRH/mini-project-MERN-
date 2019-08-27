const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReportS = new Schema({
    user: {
        type: String
    },
    email: {
        type: String
    },
    Phone: {
        type: Number
    },
    subject: {
        type: String
    },
    ReportS: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ReportStudent = mongoose.model('reportS', ReportS)