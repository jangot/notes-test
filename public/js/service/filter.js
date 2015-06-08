define([

    'jquery',

    '../service/eventBus'

], function($, eventBus) {

    var STORAGE_KEY = 'filter';

    var filter = {
        UPDATE_EVENT: 'filter:update',
        set: function(filter) {
            localStorage.setItem(STORAGE_KEY, filter);

            eventBus.notify(this.UPDATE_EVENT, [filter]);
        },
        get: function() {
            return localStorage.getItem(STORAGE_KEY) || '';
        }
    };

    $(window).bind('storage', function (e) {
        e = e.originalEvent;

        if (e.key === STORAGE_KEY) {
            var filterString = filter.get();
            eventBus.notify(filter.UPDATE_EVENT, filterString);
        }
    });

    return filter;
});