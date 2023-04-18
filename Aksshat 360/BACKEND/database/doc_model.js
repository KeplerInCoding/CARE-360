const mongoose = require('mongoose');

const doc_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const doc_model = new mongoose.model('doctor',doc_schema)

module.exports = doc_model;

