define([

    './add/view'

], function(AddView) {
    return function() {
        new AddView('.add-panel');
    }
})