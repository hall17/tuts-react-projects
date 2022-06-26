const express = require('express')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')

const app = express()

const server = http.createServer(app)

const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server is running.')
})


io.on('connection', (socket) => {
    // runs when new connection is set at client side
    socket.emit('connected', socket.id)

    //
    socket.on('call', (callData) => {
        // const { from, to, callerName, signalData, } = callData
        io.to(callData.to).emit('call',callData)
    })

    socket.on('answerCall', data => {
        io.to(data.to).emit('callAccepted', data.signal)
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended')
    })
    
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))