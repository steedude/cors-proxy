// const http = require('http')
// const httpProxy = require('http-proxy')
// const url = require('url')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const express = require('express')
const app = express()

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

app.get('/', (req, res) => {
  res.send('Hello, World！')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Running cors-proxy on ${PORT} port.`)
})

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true)
//   const userUrl = parsedUrl.query.url

//   if (!userUrl) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hello, World!')
//     return
//   }

//   console.log('User URL:', userUrl)

//   const targetHost = new URL(userUrl).hostname

//   const proxy = httpProxy.createProxyServer({})

//   proxy.on('error', (err, req, res) => {
//     console.error('Proxy error:', err)
//     res.writeHead(500, { 'Content-Type': 'text/plain' })
//     res.end('Proxy error')
//   })

//   proxy.web(req, res, {
//     target: userUrl,
//     changeOrigin: true,
//     targetHost: targetHost,
//   })
// })

// const PORT = process.env.PORT || 3000
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })
