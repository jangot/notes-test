define([

    'jquery',

    'service/filter',

    'widget/filter/controller'

], function($, filter, filterController) {

    function Filter(element) {
        this.element = $(element);
        this.element.controller(filterController);

        this.setValue(filter.get());
    }

    Filter.prototype = {
        setValue: function(filterString) {
            this.element.find('.filterInput').val(filterString);
        }
    };

    return Filter;
});