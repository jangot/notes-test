define([

    'jquery'

], function($) {

    return {
        listentrs: [],
        on: function(name, fn) {
            if ($.isFunction(fn)) {
                this.listentrs[name] = this.listentrs[name] || [];
                this.listentrs[name].push(fn);
            }
        },
        off: function() {
            // TODO realize off method
            // there is't need
            console.warn('Off not realized');
        },
        notify: function(name, params) {
            if (!$.isArray(params)) {
                params = [params];
            }

            if (this.listentrs[name]) {
                this.listentrs[name].forEach(function(fn) {
                    fn.apply(this, params);
                });
            }
        }
    }

});