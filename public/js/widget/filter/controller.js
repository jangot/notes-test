define([

    'jquery',

    'service/filter'

], function($, filter) {
    return {
        '.filterButton click': function(e) {
            var filterString = e.controller.container.find('.filterInput').val();

            filter.set(filterString);
        }
    }
});