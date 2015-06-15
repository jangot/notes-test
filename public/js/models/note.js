define([

    'service/createModel'

], function(createModel) {

    return createModel('notes', ['title', 'description']);

});