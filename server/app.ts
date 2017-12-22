import * as express from 'express';
import * as path from 'path';
import * as http from "http";
import * as sockerIO from 'socket.io';

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);
const io = sockerIO(httpServer);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    });
});


httpServer.listen(port, () => console.log(`Server started on port ${port}`));
