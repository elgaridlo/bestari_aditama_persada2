const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (e) {
        console.error(`Error: ${e.message}`)
        process.exit(1)
    }
}

module.exports = connectionDB