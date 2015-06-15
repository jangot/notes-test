define([

    'jquery',
    'models/filter'

], function($, Filter) {

    function FilterController(view) {
        this.view = view;
    }

    FilterController.prototype = {
        '.filterButton click': setNewFilter,
        '.filterInput keyup': setNewFilter
    };

    function setNewFilter() {
        var filterString = this.view.getValue();

        Filter.clearCollection();

        var filter = new Filter({
            pattern: filterString
        });
        filter.save();
    }

    return FilterController;
});