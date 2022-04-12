const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/base64') return base64(req, res)
  if (req.url === '/user-agent') return userAgent(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

function base64 (req, res) {
  res.end(JSON.stringify({ msg: 'base64' }))
}

function userAgent (req, res) {
  res.end(JSON.stringify({ msg: 'user-agent' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
