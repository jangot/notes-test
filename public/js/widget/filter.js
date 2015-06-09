define([

    'service/eventBus',
    'service/filter',
    'widget/filter/view',
    'widget/filter/controller'

], function(eventBus, filter, Filter, FilterController) {
    return function(root) {
        var element = root.find('.filter-panel');
        var filterView = new Filter(element);

        element.widget({
            controller: FilterController,
            view: filterView
        });

        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            filterView.setValue(filterString);
        });
    }
});