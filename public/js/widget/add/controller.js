define([

    'jquery',

    'service/notes',
    'service/filter'

], function($, notes, filter) {

    function AddController(view) {
        this.view = view;
    }

    AddController.prototype = {
        '.form-control keyup': function(e) {
            if (e.keyCode !== 13) {
                return;
            }

            createNote.apply(this, arguments);
        },
        '.addButton click': createNote
    };

    function createNote() {
        var getValue = this.view.getValue();

        var errors = {
            title: !getValue.title,
            description: !getValue.description
        }

        this.view.setErrors(errors);
        if (errors.title || errors.description) {
            return;
        }

        notes.add(getValue.title, getValue.description);

        this.view.setValue({
            title: '',
            description: ''
        });
        filter.set('');
    }

    return AddController;

});