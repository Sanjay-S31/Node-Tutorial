const mongoose = require('mongoose')
const Schema = mongoose.Schema 
//Schema is a constructer that is used to store the records
// models are that they surround the schema

const blogSchema = new Schema({
    title:{
        type : String,
        required : true
    },
    snippet :{
        type : String,
        required : true
    },
    body:{
        type : String,
        required : true
    }
} , { timestamps:true }) //whenever the data change it automatically assigns values for the properties

const Blog = mongoose.model('Blog', blogSchema) // first parameter name of the model and should be the 
//singular of the collection, second parameter is the schema created above

module.exports = Blog