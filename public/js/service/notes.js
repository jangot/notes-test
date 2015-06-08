define([

    'jquery',

    '../service/eventBus',
    '../lib/custom/id'

], function($, eventBus, generateId) {

    var notes = {
        UPDATE_NOTE_EVENT: 'note:update',

        add: function(title, description) {
            var notes = this.getItems();

            notes.push({
                title: title,
                description: description,
                id: generateId()
            });

            this.putItems(notes);

            eventBus.notify(this.UPDATE_NOTE_EVENT, [notes]);
        },

        getItems: function() {
            var notesItems = localStorage.getItem('notes') || '[]';

            return JSON.parse(notesItems);
        },
        putItems: function(notesItems) {
            notesItems = notesItems ? JSON.stringify(notesItems) : '[]';

            localStorage.setItem('notes', notesItems);
        }
    };

    $(window).bind('storage', function (e) {
        e = e.originalEvent;

        if (e.key === 'notes') {
            var items = notes.getItems();
            eventBus.notify(notes.UPDATE_NOTE_EVENT, [items]);
        }
    });

    return notes;
});