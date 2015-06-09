define([

    'jquery',
    '../../service/notes'

], function($, notes) {

    return {
        '[data-action="startEdit"] click': function(e) {
            var id = $(e.target).data('id');

            $('#' + id).addClass('edit');
        },
        '[data-action="cancelEdit"] click': function(e) {
            var id = $(e.target).data('id');

            $('#' + id).removeClass('edit');
        },
        '[data-action="save"] click': function(e) {
            var id = $(e.target).data('id');

            var el = $('#' + id);
            var title = el.find('[name="title"]').val();
            var description = el.find('[name="description"]').val();

            el.removeClass('edit');
            notes.edit(id, title, description);
        }
    }
});