define([], function() {

    return {
        extend: function() {
            var result = arguments[0] || {};
            var currentArgument = 1;

            while (arguments[currentArgument]) {
                var current = arguments[currentArgument];
                for (var name in current) {
                    result[name] = current[name];
                }
                currentArgument++;
            }
            return result;
        },
        find: function(arr, params) {
            arr = arr || [];
            params = params || {};

            var result = undefined;
            arr.forEach(function(item) {
                var success = true;
                for(var name in params) {
                    if (item[name] !== params[name]) {
                        success = false;
                        return;
                    }
                }

                result = item;
                return false;
            });

            return result;
        }
    }

});