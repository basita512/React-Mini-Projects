const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Todo App")

const ToDoSchema = new mongoose.Schema({
    Title: {
        type : String,
        required : true
    },

    Description: {
        type : String,
        required : true
    },

    Completed: {
        type : Boolean,
        default : false
    }
})

// Creating a Collection in DB
const todo = mongoose.model("Tasks", ToDoSchema)

module.exports = {
    todo
}