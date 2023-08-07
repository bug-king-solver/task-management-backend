const jsonServer = require('json-server')
const path = require('path')
const fs = require('fs')
const server = jsonServer.create()
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
