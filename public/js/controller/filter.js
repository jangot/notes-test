define([

    'jquery',

    'service/filter'

], function($, filter) {
    return {
        init: function() {
            $('.filterInput').val(filter.get());
        },
        '.filterButton click': function() {
            var filterString = $('.filterInput').val();

            filter.set(filterString);
        }
    }
});