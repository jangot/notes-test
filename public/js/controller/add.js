define([

    'jquery',

    'service/notes',
    'service/filter'

], function($, notes, filter) {

    return {
        '.addButton click': function() {
            var title = $('.addTitle').val();
            var description = $('.addDescription').val();

            notes.add(title, description);
            filter.set('');

            $('.addTitle').val('');
            $('.addDescription').val('');
        }
    }

});