const that = this as any;
var socket = that.io();
var $ = that.$;

socket.on('connect', () => console.log('Connected to server!'));
socket.on('disconnect', () => console.log('Disconnected from server!'));

socket.on('newMessage', (message) => {
    $("#messages").append(`<li>[${message.created}] ${message.from}: ${message.text}</li>`);
});

$('#message-form').submit(function (event) {
    event.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: $('#message').val(),
    }, res => {
        if (res.error) throw res.error;
        else $('#message').val('');
    });
});