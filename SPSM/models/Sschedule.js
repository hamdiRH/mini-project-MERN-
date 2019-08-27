const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Sscheduling = new Schema({
    title: { type: String },
    startDate: { type: Date },
    endDate: { type: Date }
})
module.exports = Scheduling = mongoose.model('Sscheduling', Sscheduling)