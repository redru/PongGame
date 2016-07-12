'use strict';
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
                    localStorage.setItem('JWT', response.getResponseHeader('JWT'));

                    window.location.hash = 'hall';
                } else if (data.status == 1) {
                    alert('User already registered.');
                } else {
                    alert(data.result);
                }
            }
        });
    }

};
