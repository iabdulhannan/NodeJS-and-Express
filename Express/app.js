const express = require('express')
const path = require('path')
const server = express()

server.use(express.static('./public'))
server.get('/', (req, res) => {
  console.log('Hello')
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


server.all('*', (req, res)=>{
  console.log()
  res.status(404).send('<h1>Not Found</h1>')
})
server.listen(3000, () => {
  console.log('Listening at 3000')
})
