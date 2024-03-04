const express = require('express')
const app = express()
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

app.get('/', (req, res) => {
  res.send('hello, world！')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Running cors-proxy on ${PORT} port.`)
})
