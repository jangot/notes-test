define([

    'jquery',

    '../service/eventBus',
    '../lib/custom/id'

], function($, eventBus, generateId) {

    var STORAGE_KEY = 'notes';

    var notes = {
        UPDATE_EVENT: 'note:update',

        add: function(title, description) {
            var notes = this.getItems();

            notes.push({
                title: title,
                description: description,
                id: generateId()
            });

            this.putItems(notes);

            eventBus.notify(this.UPDATE_EVENT, [notes]);
        },

        getItems: function() {
            var notesItems = localStorage.getItem(STORAGE_KEY) || '[]';

            return JSON.parse(notesItems);
        },
        putItems: function(notesItems) {
            notesItems = notesItems ? JSON.stringify(notesItems) : '[]';

            localStorage.setItem(STORAGE_KEY, notesItems);
        }
    };

    $(window).bind('storage', function (e) {
        e = e.originalEvent;

        if (e.key === STORAGE_KEY) {
            var items = notes.getItems();
            eventBus.notify(notes.UPDATE_EVENT, [items]);
        }
    });

    return notes;
});