/* Implement Todo API , with In-memory Data Structure to Create , Update, List(Paginated) and Remove Todos. 
Todos should have 
        Name 
        Timestamp 
        ID 
        Status(Open, Complete) 
        */

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

const todoRoute = require('./routes/todo')

const uri = 'mongodb://localhost:27017/trumio'

mongoose.connect(uri).then(() => {
    console.log('connect to mongoDB')
}).catch((err) => {
    console.log(err)
})

app.use('/todo', todoRoute)

app.listen(3000)