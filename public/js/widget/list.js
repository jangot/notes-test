define([

    'service/eventBus',
    'service/filter',
    'service/notes',
    'widget/list/view',
    'widget/list/controller'

], function(eventBus, filter, notes, ListView, ListController) {

    return function(root) {
        var element = root.find('.notes-container');
        var view = new ListView(element);

        element.widget({
            controller: ListController,
            view: view
        });
        
        var filterRegExp = new RegExp(filter.get(), 'i');
        view
            .setItems(notes.getItems())
            .setFilter(function(item) {
                return filterRegExp.test(item.title);
            })
            .draw();

        eventBus.on(notes.UPDATE_EVENT, function(items) {
            view
                .setItems(items)
                .draw();
        });
        eventBus.on(filter.UPDATE_EVENT, function(filterString) {
            filterRegExp = new RegExp(filterString, 'i');

            view.draw();
        });
    }

});