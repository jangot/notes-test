define([

    'eventBus'

], function(eventBus) {

    function Board() {
        this.notes = [];
    }

    Board.ADD_NOTE_EVENT = 'note:add';

    Board.prototype = {
        addNote: function(title, text) {
            var note = {
                title: title,
                text: text
            };
            this.notes.push(note);
            eventBus.notify(Board.ADD_NOTE_EVENT, [note, this.notes]);
        }
    };

    return Board;
});