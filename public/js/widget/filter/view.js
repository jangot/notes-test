define([

    'jquery',

    'service/filter'

], function($, filter) {

    function Filter(element) {
        this.element = $(element);

        this.setValue(filter.get());
    }

    Filter.prototype = {
        setValue: function(filterString) {
            this.element.find('.filterInput').val(filterString);
        },
        getValue: function() {
            return this.element.find('.filterInput').val();
        }
    };

    return Filter;
});