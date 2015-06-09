define([

    '../service/eventBus',
    '../service/filter',
    '../service/notes',
    './list/view'

], function(eventBus, filter, notes, ListView) {

    return function() {
        var view = new ListView('.notes-container');
        var filterRegExp = new RegExp(filter.get());
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
            filterRegExp = new RegExp(filterString);

            view.draw();
        });
    }

});