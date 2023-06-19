const mongoose = require('mongoose')

const Items = new mongoose.Schema({
    id:{
        type: String,
    },
    type:{
        type: String,
        required:true,
    },
    serialNo:{
        type: String,
    },
    assignedUser:{
        type: String
    }
})

module.exports= mongoose.model('item', Items)
