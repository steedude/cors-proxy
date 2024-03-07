const express = require('express')
const cors = require('cors')
const momoCrawler = require('./routes/momoCrawler')
const home = require('./routes/home')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', home)
app.use('/momoCrawler', momoCrawler)

const port = process.env.PORT || 9001
app.listen(port, () => console.log(`Listening to port ${port}`))
