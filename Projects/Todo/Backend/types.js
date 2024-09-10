const express = require("express")
const zod = require("zod")

const app = express()
const schema = zod.array(zod.number());
app.use(express.json)

const createTodo = zod.object({
    title : zod.string().title(),
    description : zod.string().description()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}
