const express = require('express')
const server = express()
const HOST = process.env.HOST
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`)
})

server.get('/' , (req, res) => {
    res.send('Vamos nessa')
})