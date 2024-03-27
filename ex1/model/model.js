const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        type: String, unique: true
    },
    address: {
        required: true,
        type: String
    },
    dateOfBirth: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    mobilePhone: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('Data', dataSchema)