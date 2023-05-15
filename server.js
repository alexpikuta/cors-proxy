const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

const frontendURL = 'http://localhost:5173'
const backendURL = 'http://localhost:8090'

app.use(cors({origin: frontendURL})) // Frontend app url

app.use('/', createProxyMiddleware({
  target: backendURL, // Backend app url
  changeOrigin: true
}))

app.listen(8081) // Proxy server port
