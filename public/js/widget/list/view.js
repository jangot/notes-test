define([

    'jquery',
    'lib/custom/template'

], function($, templete) {

    function List(element) {
        this.element = $(element);
        this.items = [];
        this.filters = [];
        this.template = templete('template-item');
    }

    List.prototype = {
        setItems: function(items) {
            this.items = items;

            return this;
        },
        setFilters: function(filters) {
            this.filters = filters || [];

            return this;
        },
        draw: function() {
            this.element.html('');

            this.items.forEach(function(item) {
                if (this._canDraw(item)) {
                    var element = $(this.template(item));
                    element.data('note', item);
                    this.element.append(element);
                }
            }.bind(this));
            return this;
        },
        startEdit: function(id) {
            this.endEdit();
            this.element
                .find('.note-' + id)
                .addClass('edit');
        },
        endEdit: function() {
            this.element
                .find('.edit')
                .removeClass('edit')
                .find('.has-error')
                .removeClass('has-error');
        },
        getNoteEditValue: function() {
            var el = this.element.find('.edit');

            if (el.length === 0) {
                return null;
            }

            var id = el.data('id');
            return {
                id: id,
                title: el.find('[name="title"]').val(),
                description : el.find('[name="description"]').val()
            }
        },
        setErrors: function(errors) {
            var editElement = this.element.find('.edit');
            if (editElement.length === 0) {
                return;
            }

            editElement
                .find('.has-error')
                .removeClass('has-error');
            for (var name in errors) {
                if (errors[name]) {
                    editElement.find('[name="'+ name +'"]').parent().addClass('has-error');
                }
            }
        },
        _canDraw: function(item) {
            var result = true;
            this.filters.forEach(function(filter) {
                var RE = new RegExp(filter.pattern, 'i');
                if (!RE.test(item.title)) {
                    result = false;
                    return false;
                }
            });
            
            return result;
        }
    };

    return List;

});