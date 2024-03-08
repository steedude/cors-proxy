const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const momoCrawler = require('./routes/momoCrawler')
const httpProxy = require('./routes/httpProxy')
const home = require('./routes/home')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})
app.use('/', home)
app.use('/momo', momoCrawler)
app.use('/http', httpProxy)
app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'http://localhost', // 设置一个默认的 target
    changeOrigin: true,
    router: (req) => {
      const targetUrl = req.query.url
      return targetUrl || 'http://localhost' // 如果没有查询参数，回退到默认的 target
    },
  })
)

const port = process.env.PORT || 9001
app.listen(port, () => console.log(`Listening to port ${port}`))
