define([

    'jquery',

    '../controller',
    '../controller/add'

], function($, controller, addController) {

    function Add(element) {
        controller(element, addController);

        this.element = $(element);
    }

    return Add;
});