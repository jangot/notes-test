define([

    'service/eventBus',
    'widget/list/view',
    'widget/list/controller',
    'models/note',
    'models/filter'

], function(eventBus, ListView, ListController, Note, Filter) {

    return function(root) {
        var element = root.find('.notes-container');

        element.widget({
            controller: ListController,
            view: ListView
        });
        
        var filters = Filter.getCollection();
        element
            .data('view')
            .setItems(Note.getCollection())
            .setFilters(Filter.getCollection())
            .draw();

        eventBus.on('data:update', function(collectionName) {
            if (collectionName === 'notes') {
                element
                    .data('view')
                    .setItems(Note.getCollection())
                    .draw();
            }
            if (collectionName === 'filters') {
                element
                    .data('view')
                    .setFilters(Filter.getCollection())
                    .draw();
            }
        });
    }

});