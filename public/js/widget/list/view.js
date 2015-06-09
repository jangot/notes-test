define([

    'jquery',
    'lib/custom/template'

], function($, templete) {

    function List(element) {
        this.element = $(element);
        this.items = [];
        this.template = templete('template-item');

        this.setFilter();
    }

    List.prototype = {
        setItems: function(items) {
            this.items = items;

            return this;
        },
        setFilter: function(fn) {
            if ($.isFunction(fn)) {
                this.filter = fn;
            } else {
                this.filter = function() {return true};
            }

            return this;
        },
        draw: function() {
            var result = '';

            this.items.forEach(function(item) {
                if (this.filter(item)) {
                    result = (this.template(item) + result);
                }
            }.bind(this));

            // TODO improve insertion for optimisation and animation
            this.element.html(result);

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
        }
    };

    return List;

});