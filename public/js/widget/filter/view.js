define([

    'jquery'

], function($) {

    function Filter(element) {
        this.element = $(element);

        this.setValue('');
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