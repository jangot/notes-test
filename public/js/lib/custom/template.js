define([

    'jquery'

], function($) {

    return function(elementId) {
        var template = $('#' + elementId).html();

        return function(params) {
            var result = template;

            for (var key in params) {
                var RE = new RegExp('<%= ' + key + ' %>', 'g');

                result = result.replace(RE, params[key]);
            }

            return result;
        }
    }

});