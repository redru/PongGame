'use strict';
const Hall = {
    username: $('#_username'),
    registration: $('#registration'),
    hall: $('#hall'),
    yourId: $('#yourId'),

    join: () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/register',
            data: JSON.stringify({ username: Hall.username.val() }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                const data = response.data;

                if (data.status == 0) {
                    Hall.yourId.html(data.result);

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
