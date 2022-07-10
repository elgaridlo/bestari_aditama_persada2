const express = require('express')
const morgan = require('morgan')
const {json, urlencoded} = require('body-parser')
const dotenv = require('dotenv')
const connectionDB = require('./config/connectionDB')
const indexRoutes = require('./src/index.routes')

dotenv.config()

connectionDB()

const app = express()


app.use(json())
app.use(urlencoded({extended: false}))

app.use('/api', indexRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})