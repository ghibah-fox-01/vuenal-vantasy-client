const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
app.use(cors())

io.on('connection',(socket) => {
  console.log('someone has connected')
  socket.on('clientMessage' , data =>{
    console.log(data)
  })
  io.emit('someoneConnect','seseorang terhubung')
  io.emit('hai','ini server')
})

http.listen(3007, () => {
  console.log(`connected on 3007`)
})
