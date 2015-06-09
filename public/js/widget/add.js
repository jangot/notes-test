define([

    'widget/add/view'

], function(AddView) {
    return function(root) {
        new AddView(root.find('.add-panel'));
    }
})