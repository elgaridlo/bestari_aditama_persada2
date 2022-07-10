const express = require('express')
const blockRoutes = require('./block/block.routes')
const slotRoutes = require('./slot/slot.routes')
const app = express()


app.use('/block', blockRoutes)
app.use('/slot', slotRoutes)

module.exports = app