define([

    'widget/add/view',
    'widget/add/controller'

], function(AddView, AddController) {
    return function(root) {
        var element = root.find('.add-panel');
        element
            .widget({
                controller: AddController,
                view: new AddView(element)
            });
    };
});