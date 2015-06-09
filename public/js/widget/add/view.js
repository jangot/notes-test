define([

    'jquery',

    './controller'

], function($, addController) {

    function Add(element) {
        this.element = $(element);
        this.element.controller(addController);
    }

    return Add;
});