const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/backendLearn")

//Schema

const userSchema = mongoose.Schema({
    username : String,
    age : Number,
    gender : String
})




//export the Model
module.exports = mongoose.model("users" , userSchema)






