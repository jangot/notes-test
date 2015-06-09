define([

    'jquery',

    'service/notes',
    'service/filter'

], function($, notes, filter) {

    var ENTER_KEY_CODE = 13;

    function AddController(view) {
        this.view = view;
    }

    AddController.prototype = {
        '.form-control keyup': function(e) {
            if (e.keyCode !== ENTER_KEY_CODE) {
                return;
            }

            return createNote.apply(this, arguments);
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