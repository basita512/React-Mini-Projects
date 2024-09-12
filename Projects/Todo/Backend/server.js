const express = require("express")
const cors = require("cors")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")

const app = express()
app.use(express.json())
app.use(cors()) //cors allow to host backend to everyone like mobile postman else it will only allow localhost only


/*---------------------Printing the User Request------------------------ */
app.get('/show', async (req, res) => {
    const result = await todo.find({})
    res.json({
        result
    })
})


/*---------------------Taking Todos from Client ------------------------ */
app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload) 
    //SafeParse() method compares the data type of the payload and the dataTypes in createTodo(in types.js) is equal or not

    console.log(createPayload)
    if (!parsePayload.success) {
        console.log(parsePayload.error);
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }

    // else put in MongoDB
    await todo.create({
        Title: createPayload.Title,
        Description: createPayload.Description
    })
    res.json({
        msg: "ToDo is created"
    })
})


/*----------------------------Updating Todos -------------------------------*/
// {
//     "id": "66dfee339e6271b174a1319f" put this in body
// }

app.put('/completed', async (req, res) => {
    const updatePayLoad = req.body
    const parsePayload = updateTodo.safeParse(updatePayLoad)

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong Inputs"
        })
        return
    }

    const updatedTodo = await todo.updateOne(
        { _id: req.body.id },
        { Completed : req.body.Completed }
    )
    res.json({
        msg: "ToDo marked as Completed !",
        todo: updatedTodo
    })

})


/*---------------------------- Delete Todos *----------------------------* */
app.delete('/todo/:id', async (req, res) => {
    const taskID = req.params.id
    try {
        await todo.deleteOne({ _id : taskID })
        res.json({
            msg : 'Todo deleted succesfully'
        })
    } catch (error) {
        res.status(500).json({
            msg : 'Error deleting Todo', error
        })
    }
})

app.listen(3000, () => console.log("Server Up !"))