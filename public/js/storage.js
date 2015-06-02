define([

    'jquery',

    'eventBus'

], function($, eventBus) {

    $(window).bind('storage', function (e) {
        $('.result').html('FIRE!!!');
        console.log('FIRE!!!');
    });

    $('.result').html('GOOD');


    $('.set').click(function() {
        var val = $('input').val();
        console.log(val);
        localStorage.setItem('run63', val);
        $('input').val('')
    });
    $('.clear').click(function() {
        localStorage.clear();
    });

});