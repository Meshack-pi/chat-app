//The server side File
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('message', 'Hello Gentlemen');
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    });
  });
