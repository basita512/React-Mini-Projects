const mongoose = require("mongoose")

const DB_URL = "mongodb://127.0.0.1:27017/TodoApp"
mongoose.connect(DB_URL)
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("Error connecting Database: ", err))


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