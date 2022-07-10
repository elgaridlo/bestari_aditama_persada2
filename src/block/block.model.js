const mongoose = require('mongoose')

const blockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    }
}, {
    timestamp: true
})

const Block = mongoose.model('block', blockSchema)

module.exports = Block