const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String, 
        default: "", 
        trim: true
    }, 
    content: {
        type: String, 
        required: true, 
        trim: true
    }, 
    moduleName: {
        type: String, 
        default: "GENERAL",
        trim: true,  
        uppercase: true,
    }, 
    slide: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note