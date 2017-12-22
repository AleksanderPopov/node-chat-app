const that = this as any;
var socket = that.io();

export type Message = {
    text: string,
    from: string,
    created?: Date
}

socket.on('connect', function () {
    console.log('Connected to server!');
});
socket.on('disconnect', function () {
    console.log('Disconnected from server!');
});
socket.on('newMessage', (message: Message) => {
    console.log(`[${message.created}] ${message.from}: ${message.text}`);
});