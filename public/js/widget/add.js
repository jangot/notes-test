define([

    'widget/add/view',
    'widget/add/controller'

], function(AddView, AddController) {
    return function(root) {
        root
            .find('.add-panel')
            .widget({
                controller: AddController,
                view: AddView
            });
    };
});