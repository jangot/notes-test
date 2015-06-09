define([

    'jquery',
    'service/notes'

], function($, notes) {

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

            this.view.endEdit();
            notes.edit(editValue.id, editValue.title, editValue.description);
        },
        '[data-action="remove"] click': function(e) {
            var id = $(e.target).data('id');
            notes.remove(id);
        }
    }

    return ListController;
});