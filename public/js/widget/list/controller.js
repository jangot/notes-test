define([

    'jquery'

], function($) {

    function ListController(view) {
        this.view = view;
    }

    ListController.prototype = {
        '[data-action="startEdit"] click': function(e) {
            var id = $(e.target).data('id');

            this.view.startEdit(id);
        },
        '[data-action="cancelEdit"] click': function(e) {
            this.view.endEdit();
        },
        '[data-action="save"] click': function(e) {
            var editValue = this.view.getNoteEditValue();
            if (!editValue) {
                return;
            }

            var errors = {
                title: !editValue.title,
                description: !editValue.description
            };
            if (errors.title || errors.description) {
                this.view.setErrors(errors);
                return;
            }

            var note = this.view.element
                .find('.note-'+ editValue.id)
                .data('note');

            note.title = editValue.title;
            note.description = editValue.description;
            note.save();
        },
        '[data-action="remove"] click': function(e) {
            var id = $(e.target).data('id');
            this.view.element
                .find('.note-'+ id)
                .data('note')
                .remove();
        }
    }

    return ListController;
});