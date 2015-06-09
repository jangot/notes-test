define([

    'jquery',

    'service/notes',
    'service/filter'

], function($, notes, filter) {

    return {
        '.addButton click': function(e) {
            var titleInput = e.container.find('.addTitle');
            var descriptionInput = e.container.find('.addDescription');

            var title = titleInput.val();
            var description = descriptionInput.val();

            notes.add(title, description);

            filter.set('');
            titleInput.val('');
            descriptionInput.val('');
        }
    }

});