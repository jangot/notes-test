define([

    'jquery',

    '../../lib/custom/template',
    './controller'

], function($, templete, listController) {

    function List(element) {
        this.element = $(element);
        this.items = [];
        this.template = templete('template-item');

        this.setFilter();

        this.element.controller(listController)
    }

    List.prototype = {
        setItems: function(items) {
            this.items = items;

            return this;
        },
        setFilter: function(fn) {
            if ($.isFunction(fn)) {
                this.filter = fn;
            } else {
                this.filter = function() {return true};
            }

            return this;
        },
        draw: function() {
            var result = '';

            this.items.forEach(function(item) {
                if (this.filter(item)) {
                    result += this.template(item);
                }
            }.bind(this));

            // TODO improve insertion for optimisation and animation
            this.element.html(result);

            return this;
        }
    };

    return List;

});