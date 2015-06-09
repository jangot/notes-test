define([

    'service/eventBus',
    'service/filter',
    'widget/filter/view'

], function(eventBus, filter, Filter) {
    return function() {
        var filterView = new Filter('.filter-panel');

        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            filterView.setValue(filterString);
        });
    }
});