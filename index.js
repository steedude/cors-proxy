const http = require('http')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({})
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const server = http.createServer((req, res) => {
  // 如果是一個 OPTIONS 請求，則直接回應
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }
  const myURL = new URL(req.url, `http://${req.headers.host}`)
  // 取得'?url='後面的參數
  const userUrl = myURL.searchParams.get('url')

  if (!userUrl) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, World!')
    return
  }

  if (userUrl.startsWith('http://') || userUrl.startsWith('https://')) {
    // 正確格式的 URL，無需進行任何操作
  } else {
    // URL 格式不正確
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.end('Invalid URL format')
    return
  }

  // 設置 CORS 頭部
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  proxy.on('error', (err, req, res) => {
    console.error('Proxy error:', err)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Proxy error')
  })

  proxy.web(req, res, {
    target: userUrl,
    changeOrigin: true,
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
