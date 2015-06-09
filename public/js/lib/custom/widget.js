define([

    'jquery'

], function($) {

    $.fn.widget = function(params) {
        var Controller = params.controller || function() {};
        var View = params.view || function() {};

        this.each(function() {
            var element = $(this);
            var view = new View(element);
            var actions = new Controller(view);

            for (var actionName in actions) {
                var selector = actionName.split(' ')[0];
                var event = actionName.split(' ')[1];

                if (event) {
                    setAction(selector, event, actionName);
                }
            }

            element.data('view', view);

            function setAction(selector, event, actionName) {
                element.delegate(selector, event, function(e) {
                    e.widget = {
                        container: element
                    };
                    return actions[actionName].apply(actions, arguments);
                });
            }
        });
        
        return this;
    }
});