define([

    'jquery',

    'service/notes',
    'service/filter'

], function($, notes, filter) {

    return {
        '.addButton click': function(e) {
            var titleInput = e.controller.container.find('.addTitle');
            var descriptionInput = e.controller.container.find('.addDescription');

            var title = titleInput.val();
            var description = descriptionInput.val();

            notes.add(title, description);

            filter.set('');
            titleInput.val('');
            descriptionInput.val('');
        }
    }

});