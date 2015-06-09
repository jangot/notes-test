define([

    'service/eventBus',
    'service/filter',
    'widget/filter/view'

], function(eventBus, filter, Filter) {
    return function(root) {
        var filterView = new Filter(root.find('.filter-panel'));

        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            filterView.setValue(filterString);
        });
    }
});