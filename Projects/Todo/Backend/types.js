const express = require("express")
const { z } = require("zod")

const app = express()
const schema = z.array(z.number());
app.use(express.json())

const createTodo = z.object({
    Title : z.string(),
    Description : z.string()
})

const updateTodo = z.object({
    id : z.string().nonempty(),
    Completed : z.boolean()
})

module.exports = {
    createTodo,
    updateTodo
}
