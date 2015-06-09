define([

    'jquery'

], function($) {

    $.fn.controller = function(actions) {
        this.each(function() {
            var element = $(this);

            for (var actionName in actions) {
                var selector = actionName.split(' ')[0];
                var event = actionName.split(' ')[1];

                if (event) {
                    setAction(selector, event, actionName);
                }
            }

            function setAction(selector, event, actionName) {
                element.delegate(selector, event, function(e) {
                    e.controller = {
                        container: element
                    };
                    return actions[actionName].apply(this, arguments);
                });
            }
        });
    }



});