define([

    'jquery',

    'service/eventBus',

    'view/list',
    'service/notes'

], function($, eventBus, List, notes) {
    return {
        start: function() {
            var list = new List('.notes-container');

            list.draw(notes.getItems());
            eventBus.on(notes.UPDATE_NOTE_EVENT, function(items) {
                list.draw(items);
            });

            $('.addButton').click(function() {
                var title = $('.addTitle').val();
                var description = $('.addDescription').val();

                notes.add(title, description);
            });
        }
    }
});