const that = this as any;
var socket = that.io();
var $ = that.$;

socket.on('connect', () => console.log('Connected to server!'));
socket.on('disconnect', () => console.log('Disconnected from server!'));

socket.on('newMessage', (message) => {
    $("#messages").append(`<li>[${message.created}] ${message.from}: ${message.text}</li>`);
    scrollToBottom();
});

$('#message-form').submit(function (event) {
    event.preventDefault();
    const messageInput = $('#message');
    socket.emit('createMessage', {
        from: 'User',
        text: messageInput.val(),
    }, res => {
        if (res.error) throw res.error;
        else messageInput.val('');
    });
});

function scrollToBottom() {
    const messages = $('#messages');
    const newMessage = messages.children('li:last-child');


    const clientHeight = messages.prop('clientHeight');
    const scrollTop = messages.prop('scrollTop');
    const scrollHeight = messages.prop('scrollHeight');
    const newMessageHeight = newMessage.innerHeight();
    const lastMessageHeight = newMessage.prev().innerHeight();

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight>= scrollHeight) {
        console.log(123);
    }
}