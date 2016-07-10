'use strict';
(function() {
    const register = $('#register');
    const hall = $('#hall');
    const game = $('#game');

    $(document).ready(function DocumentReady() {
        window.location.hash = 'register';
    });

    $(window).on('hashchange',function(){
        switch (window.location.hash) {
            case '#register':
                return Promise.all([
                    new Promise(function(resolve) {
                        hall.fadeOut('medium', function() {
                            return resolve();
                        });
                    }), new Promise(function(resolve) {
                        game.fadeOut('medium', function() {
                            return resolve();
                        });
                    })
                ]).then(function() {
                    register.fadeIn();
                });
                break;

            case '#hall':
                return Promise.all([
                    new Promise(function(resolve) {
                        register.fadeOut('medium', function() {
                            return resolve();
                        });
                    }), new Promise(function(resolve) {
                        game.fadeOut('medium', function() {
                            return resolve();
                        });
                    })
                ]).then(function() {
                    hall.fadeIn();
                });
                break;

            case '#game':
                return Promise.all([
                    new Promise(function(resolve) {
                        hall.fadeOut('medium', function() {
                            return resolve();
                        });
                    }), new Promise(function(resolve) {
                        register.fadeOut('medium', function() {
                            return resolve();
                        });
                    })
                ]).then(function() {
                    game.fadeIn();
                });

                break;

            default:
                register.fadeOut('medium');
                hall.fadeOut('medium');
                game.fadeOut('medium');
                break;
        }
    });
})();
