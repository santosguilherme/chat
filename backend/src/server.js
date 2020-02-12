import http from 'http';
import express from 'express';
import socket from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

socket.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        console.log('message: ', msg);
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
