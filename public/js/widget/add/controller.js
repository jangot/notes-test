define([

    'jquery',

    'models/note'

], function($, Note) {


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

        var note = new Note({
            title: getValue.title,
            description: getValue.description
        });

        note.save();

        this.view.setValue({
            title: '',
            description: ''
        });
    }

    return AddController;

});