define([

    'jquery'

], function($) {
    return function(element, actions) {
        for (var actionName in actions) {
            var selector = actionName.split(' ')[0];
            var event = actionName.split(' ')[1];

            if (event) {
                $(element).delegate(selector, event, actions[actionName]);
            }
        }

        return actions.init ? actions.init.bind(actions) : function() {};
    }
});