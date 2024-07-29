const express = require('express')
const router = express()
const TodoSchema = require('../model/todo')

/* 
    1. GET - all our todo
    2. GET - todo using ID
    3. POST - craete a TODO
    4. PUT - update a TODO using ID
    5. DELETE - delete a TODO using ID
*/

router.get('/', async (req, res) => {
    await TodoSchema.find({}).then((data) => {
        if (data.length == 0) {
            return res.status(200).send('No data found!');
        }
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json({ 'message': err })
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    await TodoSchema.findById(id).then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json({ 'message': err })
    })
})

router.post('/', async (req, res) => {
    const { name, status } = req.body;
    console.log(req.body)
    const newTodo = new TodoSchema({
        name: name,
        status: status
    });

    await newTodo.save().then((data) => {
        return res.status(200).send('Todo Created Successfully');
    }).catch((err) => {
        return res.status(400).send(err);
    })
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { name, status } = req.body;

    await TodoSchema.updateOne({ id: id }, {
        name: name,
        status: status
    }).then((data) => {
        return res.status(200).send('Todo Updated Successfully');
    }).catch((err) => {
        return res.status(400).send('Problem while updating todo!');
    })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    await TodoSchema.deleteOne({ id: id }).then((data) => {
        return res.status(200).send('Todo Deleted Successfully');
    }).catch((err) => {
        return res.status(400).send('Problem while deleting todo!');
    })
})

module.exports = router