var socket;
$(document).ready(function() {

  socket = io.connect('http://localhost:5000');

  socket.on('connect', function() {
    socket.send('User has connected!');
  });

  socket.on('message', function(msg) {
    $("#messages").append('<li>' + msg + '</li>');
  });

  $('#sendbutton').on('click', function() {
    sendMessage();
  });

  $("#myMessage").on('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      sendMessage();
    }
  });
});

function sendMessage() {
  var msg = $('#myMessage').val();
  if (msg) {
    socket.send(($('#username').val() || 'Anonymous') + ': ' + msg);
    $('#myMessage').val('');
  }
}