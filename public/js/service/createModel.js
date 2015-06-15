define([

    'service/dataKeeper',
    'lib/custom/util',
    'lib/custom/id'

], function(dataKeeper, util, getId) {

    return function createModel(name, fields) {
        fields = fields || [];
        fields.push('id');

        function Model(data) {
            data = data || {};

            if (!data.id) {
                data.id = getId();
            }
            util.extend(this, data);
        }

        Model.getCollection = function() {
            var data = dataKeeper.getCollection(name);

            var result = [];
            data.forEach(function(item) {
                result.push(new Model(item));
            }.bind(this));

            return result;
        };

        Model.clearCollection = function() {
            dataKeeper.removeAll(name);
        };

        Model.prototype = {
            save: function() {
                var result = {};
                fields.forEach(function(field) {
                    result[field] = this[field];
                }.bind(this));

                dataKeeper.saveDocument(name, result);
            },
            remove: function() {
                dataKeeper.removeDocument(name, this);
            }
        };

        return Model;
    }
});