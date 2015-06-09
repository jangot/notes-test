define([

    'jquery'

], function($) {

    $.fn.widget = function(actions) {
        var Controller = actions.controller;
        var view = actions.view || {};

        this.each(function() {
            var element = $(this);

            var actions = new Controller(view);

            for (var actionName in actions) {
                var selector = actionName.split(' ')[0];
                var event = actionName.split(' ')[1];

                if (event) {
                    setAction(selector, event, actionName);
                }
            }

            function setAction(selector, event, actionName) {
                element.delegate(selector, event, function(e) {
                    e.widget = {
                        container: element
                    };
                    return actions[actionName].apply(actions, arguments);
                });
            }
        });
    }



});