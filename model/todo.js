const express = require('express')
const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'Complete'],
        required: true,
        default: 'Open'
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('todoSchema', TodoSchema)