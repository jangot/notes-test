define([

    'jquery'

], function($) {

    return {
        listeners: {},
        on: function(name, fn) {
            if (!$.isFunction(fn)) {
                return function() {};
            }

            this.listeners[name] = this.listeners[name] || [];
            this.listeners[name].push(fn);

            return function off() {
                var eventIndex = null;
                this.listeners[name].forEach(function(itemFn, i) {
                    if (itemFn === fn) {
                        eventIndex = i;
                        return false;
                    }
                });
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