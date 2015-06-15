define([

    'jquery',
    'service/eventBus',
    'lib/custom/util',
    'lib/custom/id'

], function($, eventBus, util, getId) {

    var UPDATE_EVENT = 'data:update';

    var dataKeeper = {
        saveDocument: function(collectionName, doc) {
            if (!doc.id) {
                doc.id = getId();
            }
            var collection = this.getCollection(collectionName);
            var index = this._getDocumentIndex(doc, collection);

            collection[index] = doc;

            localStorage.setItem(collectionName, JSON.stringify(collection));

            eventBus.notify(UPDATE_EVENT, [collectionName, collection]);
        },
        removeDocument: function(collectionName, doc) {
            if (!doc.id) {
                return;
            }
            var collection = this.getCollection(collectionName);
            var index = this._getDocumentIndex(doc, collection);

            collection.splice(index, 1);

            localStorage.setItem(collectionName, JSON.stringify(collection));

            eventBus.notify(UPDATE_EVENT, [collectionName, collection]);
        },
        removeAll: function(collectionName) {
            localStorage.removeItem(collectionName);
            eventBus.notify(UPDATE_EVENT, [collectionName, []]);
        },
        getCollection: function(collectionName) {
            return JSON.parse(localStorage.getItem(collectionName) || '[]');
        },
        _getDocumentIndex: function(doc, collection) {
            var index = collection.length;
            collection.forEach(function(item, i) {
                if (doc.id === item.id) {
                    index = i;
                    return false;
                }
            });

            return index;
        }
    };

    $(window).bind('storage', function (e) {
        e = e.originalEvent;

        var collection = dataKeeper.getCollection(e.key);
        eventBus.notify(UPDATE_EVENT, [e.key, collection]);
    });

    return dataKeeper;
});