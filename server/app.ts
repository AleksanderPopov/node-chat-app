import * as express from 'express';
import * as path from 'path';
import * as http from "http";
import * as sockerIO from 'socket.io';
import {Message} from "./message";

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);
const io = sockerIO(httpServer);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');
    socket.on('disconnect', () => console.log('User disconnected!'));

    socket.emit('newMessage', Message.from('Welcome!', 'admin'));

    socket.broadcast.emit('newMessage', Message.from('New user joined', 'admin'));

    socket.on('createMessage', (message: Message, cb) => {
        if (!message || !message.text) {
            cb({
                status: 'fail',
                error: 'Message is not correct'
            });
        } else {
            io.emit('newMessage', Message.from(message.text, message.from));
            cb({
                status: 'success'
            });
        }
    });
});


httpServer.listen(port, () => console.log(`Server started on port ${port}`));
