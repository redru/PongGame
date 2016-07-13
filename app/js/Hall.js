'use strict';
var socket;

const Hall = {
    username: $('#_username'),
    registration: $('#registration'),
    hall: $('#hall'),
    connectedAs: $('#connectedAs'),

    join: () => {
        $.ajax({
            type: 'POST',
            url: '/register',
            data: JSON.stringify({ username: Hall.username.val() }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(data, status, response) {
                if (data.status == 0) {
                    Hall.connectedAs.html(data.result);
                    sessionStorage.setItem('JWT', response.getResponseHeader('JWT'));

                    window.location.hash = 'hall';
                    openSocket();
                } else if (data.status == 1) {
                    alert('User already registered.');
                } else {
                    alert(data.result);
                }
            }
        });
    }
};

function openSocket() {
    socket = io.connect('http://localhost/');

    socket.on('userRegistered', function(data) {
        var list = '<br>';
        data.users.forEach(function(user) {
            list = list + user + '<br>';
        });

        $('#connectedUsers').html(list);
    });

    socket.on('found', function() {
        console.log('Match found!');
    });

    socket.emit('JWT', { JWT: sessionStorage.getItem('JWT') });
}
