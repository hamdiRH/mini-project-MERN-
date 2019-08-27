const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Pscheduling = new Schema({
    title: { type: String },
    startDate: { type: Date },
    endDate: { type: Date }
})
module.exports = Pcheduling = mongoose.model('Pscheduling', Pscheduling)