const that = this as any;
var socket = that.io();


socket.on('connect', () => console.log('Connected to server!'));

socket.on('disconnect', () => console.log('Disconnected from server!'));

socket.on('newMessage', (message) => console.log(`[${message.created}] ${message.from}: ${message.text}`));