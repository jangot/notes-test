define([

    'service/eventBus',
    'service/filter',
    'widget/filter/view',
    'widget/filter/controller'

], function(eventBus, filter, Filter, FilterController) {
    return function(root) {
        var element = root.find('.filter-panel');

        element.widget({
            controller: FilterController,
            view: Filter
        });

        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            element.data('view').setValue(filterString);
        });
    }
});