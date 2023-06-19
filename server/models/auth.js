const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true,
        unique: true,
    },
    username:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
})

module.exports= mongoose.model('auth', AuthSchema)
