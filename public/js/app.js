define([

    'jquery',
    'controller',

    'service/eventBus',

    'view/list',
    'controller/list',

    'view/add',
    'view/filter',

    'service/notes',
    'service/filter'

], function($, controller, eventBus, List, listController, Add, Filter, notes, filter) {
    return {
        start: function() {
            this
                ._initList()
                ._initAdd()
                ._initFilter();
        },
        _initList: function() {
            var list = new List('.notes-container');
            var filterRegExp = new RegExp(filter.get());
            list
                .setItems(notes.getItems())
                .setFilter(function(item) {
                    return filterRegExp.test(item.title);
                })
                .draw();

            eventBus.on(notes.UPDATE_EVENT, function(items) {
                list
                    .setItems(items)
                    .draw();
            });
            eventBus.on(filter.UPDATE_EVENT, function(filterString) {
                filterRegExp = new RegExp(filterString);

                list.draw();
            });

            return this;
        },
        _initAdd: function() {
            new Add('.add-panel');
            return this;
        },
        _initFilter: function() {
            var filterView = new Filter('.filter-panel');

            eventBus.on(filter.UPDATE_EVENT, function(filterString) {
                filterView.setValue(filterString);
            });

            return this;
        }
    }
});