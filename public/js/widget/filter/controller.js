define([

    'jquery',

    'service/filter'

], function($, filter) {

    function FilterController(view) {
        this.view = view;
    }

    FilterController.prototype = {
        '.filterButton click': function(e) {
            var filterString = this.view.getValue();

            filter.set(filterString);
        },
        '.filterInput keyup': function(e) {
            var filterString = this.view.getValue();

            filter.set(filterString);
        }
    }

    return FilterController;
});