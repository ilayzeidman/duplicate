const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    dateOfCoronaVaccine: {
        required: true,
        type: String
    },
    manufacturerOfVaccine: {
        required: true,
        type: String
    },
    dateOfPositiveResult: {
        required: true,
        type: String
    },
    recoveryDate: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema)