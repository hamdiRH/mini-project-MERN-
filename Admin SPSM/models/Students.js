const mongoose = require('mongoose')
const Schema = mongoose.Schema



// Create Student Schema

const StudentsSchema = new Schema({
    user: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },

    birthday: {
        type: String
    },
    tel: {
        type: String
    },
    gender: {
        type: String
    },
    adresse: {
        type: String
    },
    classSection: {
        type: String
    },
    guardien_id: {
        type: String
    },
    guardienName: {
        type: String
    },
    gardienOccupation: {
        type: String
    },
    guardienTel: {
        type: String
    },
    guardienEmail: {
        type: String
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Students = mongoose.model('students', StudentsSchema)