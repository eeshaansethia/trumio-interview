const express = require('express')
const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('todoSchema', TodoSchema)