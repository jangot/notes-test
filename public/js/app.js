define([

    'jquery',

    'service/eventBus',

    'view/list',
    'service/notes',
    'service/filter'

], function($, eventBus, List, notes, filter) {
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
            $('.addButton').click(function() {
                var title = $('.addTitle').val();
                var description = $('.addDescription').val();

                notes.add(title, description);
                filter.set('');

                $('.addTitle').val('');
                $('.addDescription').val('');
            });

            return this;
        },
        _initFilter: function() {
            $('.filterInput').val(filter.get());
            $('.filterButton').click(function() {
                var filterString = $('.filterInput').val();

                filter.set(filterString);
            });
            eventBus.on(filter.UPDATE_EVENT, function(filterString) {
                $('.filterInput').val(filterString);
            });

            return this;
        }
    }
});