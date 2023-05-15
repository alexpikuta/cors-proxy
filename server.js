const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

app.use(cors({origin: 'http://localhost:5173'})) // Frontend app url

app.use('/', createProxyMiddleware({
  target: 'http://localhost:8090', // Backend app url
  changeOrigin: true
}))

app.listen(8081) // Proxy server port
