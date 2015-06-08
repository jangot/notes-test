define([

    'jquery',

    '../controller',
    '../controller/filter'

], function($, controller, filterController) {

    function Filter(element) {
        controller(element, filterController)();

        this.element = $(element);
    }

    Filter.prototype = {
        setValue: function(filterString) {
            this.element.find('.filterInput').val(filterString);
        }
    };

    return Filter;
});