define([

    'service/eventBus',
    'models/filter',
    'widget/filter/view',
    'widget/filter/controller'

], function(eventBus, Filter, FilterView, FilterController) {
    return function(root) {
        var element = root.find('.filter-panel');

        element.widget({
            controller: FilterController,
            view: FilterView
        });

        setFilter();
        eventBus.on('data:update', function(collectionName) {
            if (collectionName === 'filters') {
                setFilter()
            }
        });

        function setFilter() {
            var filtersList = Filter.getCollection();
            if (!filtersList || filtersList.length === 0) {
                filtersList = [{pattern: ''}];
            }
            element.data('view').setValue(filtersList[0].pattern);
        }
    }
});