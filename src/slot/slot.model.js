const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    block_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'block'
    },
    slot_number: {
        type: Number,
        required: true
    },
    car_number: {
        type: String,
        default: 'available'
    },
    isEmpty: {
        type: Boolean,
        default: true
    }
},{
    timestamp: true
})

const Slot = mongoose.model('slot', slotSchema)

module.exports = Slot