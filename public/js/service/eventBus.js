define([

    'jquery'

], function($) {

    return {
        listeners: {},
        on: function(name, fn) {
            var eventIndex = null;
            if ($.isFunction(fn)) {
                this.listeners[name] = this.listeners[name] || [];
                eventIndex = this.listeners[name].length;

                this.listeners[name][eventIndex] = fn;
            }

            return function off() {
                if (eventIndex !== null) {
                    this.listeners[name].splice(eventIndex, 1);
                }
            }.bind(this);
        },
        notify: function(name, params) {
            if (!$.isArray(params)) {
                params = [params];
            }

            if (this.listeners[name]) {
                this.listeners[name].forEach(function(fn) {
                    fn.apply(this, params);
                });
            }
        }
    }

});