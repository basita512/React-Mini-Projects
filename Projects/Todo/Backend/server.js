const express = require("express")
const { createTodo, updateTodo } = require("./types")

const app = express()

app.get('/show', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload) 
    //SafeParse() method compares the data type of the payload and the dataTypes in createTodo(in types.js) is equal or not

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    // else put in MongoDB
})

app.put('/completed', () => {
    const updatePayLoad = req.body
    const parsePayload = updateTodo.safeParse(updatePayLoad)

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong Inputs"
        })
        return
    }
})

app.listen(3000, () => console.log("Server Up !"))