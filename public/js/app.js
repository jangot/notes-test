define([

    'jquery',

    'widget/list',
    'widget/add',
    'widget/filter'

], function($, widgetList, widgetAdd, widgetFilter) {
    return {
        start: function() {
            var rootElement = $('.container .row');

            widgetList(rootElement);
            widgetAdd(rootElement);

            widgetFilter(rootElement);
        }
    }
});