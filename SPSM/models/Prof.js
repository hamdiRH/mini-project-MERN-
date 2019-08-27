const mongoose = require('mongoose')
const Schema = mongoose.Schema



// Create Student Schema

const ProfSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    adresse: {
        type: String
    },
    tel: {
        type: Number,
    },
    birthday: {
        type: Date,
    },
    class: {
        type: String,
    }


});


module.exports = Prof = mongoose.model('prof', ProfSchema)