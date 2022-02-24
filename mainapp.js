const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const path = require('path')

const app = express()

app.use(express.json({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/concert', require('./routes/concert.routes'))
app.use('/api/video', require('./routes/video.routes'))
app.use('/api/track', require('./routes/track.routes'))


const PORT = config.get('port') || 5000


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`server start ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
