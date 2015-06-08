define([

    'jquery',

    '../lib/custom/template'

], function($, templete) {

    var itemTemplate = templete('template-item');

    function List(element) {
        this.element = $(element);
        this.filter = new RegExp('');
    }

    List.prototype = {
        draw: function(items) {
            var result = '';

            items.forEach(function(item) {
                if (this.filter.test(item.title)) {
                    result += itemTemplate(item);
                }
            }.bind(this));

            this.element.html(result);
        },
        setFilter: function(value) {
            value = value || '';
            this.filter = new RegExp(value);
        }
    }

    return List;

});