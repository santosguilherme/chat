import Koa from 'koa';
import socketIO from'socket.io';

const app = new Koa();
const server = app.listen(8080);
const io = socketIO(server);


console.log('Server started');

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        console.log('message: ', msg);
        io.emit('chat message', msg);
    });
});
