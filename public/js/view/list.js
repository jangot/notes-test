define([

    'jquery',

    '../lib/custom/template'

], function($, templete) {

    function List(element) {
        this.element = $(element);
        this.items = [];
        this.filter = new RegExp('');
        this.template = templete('template-item');
    }

    List.prototype = {
        setItems: function(items) {
            this.items = items;

            return this;
        },
        setFilter: function(value) {
            value = value || '';
            this.filter = new RegExp(value);

            return this;
        },
        draw: function() {
            var result = '';

            this.items.forEach(function(item) {
                if (this.filter.test(item.title)) {
                    result += this.template(item);
                }
            }.bind(this));

            // TODO improve insertion for optimisation and animation
            this.element.html(result);

            return this;
        }
    }

    return List;

});