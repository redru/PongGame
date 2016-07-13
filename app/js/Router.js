'use strict';
(function() {
    var register;
    var hall;
    var game;

    var current;

    $(document).ready(function DocumentReady() {
        register = $('#register');
        hall = $('#hall');
        game = $('#game');
        current = register;

        window.location.hash = 'register';
    });

    $(window).on('hashchange',function(){
        switch (window.location.hash) {
            case '#register':
                current.fadeOut('medium', function() {
                    current = register;
                    register.fadeIn();
                });

                break;

            case '#hall':
                current.fadeOut('medium', function() {
                    current = hall;
                    hall.fadeIn();
                });

                break;

            case '#game':
                current.fadeOut('medium', function() {
                    current = game;
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

    function onHallEnter() {

    }

})();
