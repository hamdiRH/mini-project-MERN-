const mongoose = require('mongoose')
const Schema = mongoose.Schema



// Create Student Schema

const ProfSchema = new Schema({
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
    adresse: {
        type: String
    }
});


module.exports = Prof = mongoose.model('prof', ProfSchema)