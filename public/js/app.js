define([

    'jquery',

    'service/eventBus',

    'view/list',
    'service/notes',
    'service/filter'

], function($, eventBus, List, notes, filter) {
    return {
        start: function() {
            var list = new List('.notes-container');

            list
                .setItems(notes.getItems())
                .setFilter(filter.get())
                .draw();
            eventBus.on(notes.UPDATE_EVENT, function(items) {
                list
                    .setItems(items)
                    .draw();
            });
            eventBus.on(filter.UPDATE_EVENT, function(filterString) {
                list
                    .setFilter(filterString)
                    .draw();
            });

            $('.addButton').click(function() {
                var title = $('.addTitle').val();
                var description = $('.addDescription').val();

                notes.add(title, description);
                filter.set('');

                $('.addTitle').val('');
                $('.addDescription').val('');
            });

            $('.filterInput').val(filter.get());
            $('.filterButton').click(function() {
                var filterString = $('.filterInput').val();

                filter.set(filterString);
            });
            eventBus.on(filter.UPDATE_EVENT, function(filterString) {
                $('.filterInput').val(filterString);
            });
        }
    }
});