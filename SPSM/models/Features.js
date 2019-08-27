const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const FeaturesSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    ctn: {
        type: String,
        required: true
    },
})

module.exports = Feature = mongoose.model('feature', FeaturesSchema);