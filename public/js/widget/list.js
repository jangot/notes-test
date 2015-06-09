define([

    'service/eventBus',
    'service/filter',
    'service/notes',
    'widget/list/view',
    'widget/list/controller'

], function(eventBus, filter, notes, ListView, ListController) {

    return function(root) {
        var element = root.find('.notes-container');

        element.widget({
            controller: ListController,
            view: ListView
        });
        
        var filterRegExp = new RegExp(filter.get(), 'i');
        element
            .data('view')
            .setItems(notes.getItems())
            .setFilter(function(item) {
                return filterRegExp.test(item.title);
            })
            .draw();

        eventBus.on(notes.UPDATE_EVENT, function(items) {
            element
                .data('view')
                .setItems(items)
                .draw();
        });
        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            filterRegExp = new RegExp(filterString, 'i');

            element
                .data('view')
                .draw();
        });
    }

});