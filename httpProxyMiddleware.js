const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
