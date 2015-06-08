define([

], function() {

    var count = 0;
    var time = (new Date()).getTime();

    return function() {
        count++;

        return 'id-' + time + '-' + count;
    }
});