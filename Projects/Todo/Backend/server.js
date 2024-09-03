const express = require("express")
const { createTodo } = require("./types")

const app = express()

app.get('/ser', (req, res) => {
    res.send("Hi from Server")
})

app.post('/todo', (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo
    
})

app.listen(3000, () => console.log("Server Up !"))