define([

    'widget/list',
    'widget/add',
    'widget/filter'

], function(widgetList, widgetAdd, widgetFilter) {
    return {
        start: function() {
            widgetList();
            widgetAdd();
            widgetFilter();
        }
    }
});