define([

    'jquery'

], function($) {

    function AddView(element) {
        this.element = $(element);
    }

    AddView.prototype = {
        setErrors: function(errors) {
            this.element.find('.form-control').parent().removeClass('has-error');

            this.element
                .find('.form-control')
                .each(function() {
                    var el = $(this);
                    var name = el.attr('name');

                    if (errors[name]) {
                        el.parent().addClass('has-error');
                    }
                })
        },
        getValue: function() {
            var titleInput = this.element.find('[name="title"]');
            var descriptionInput = this.element.find('[name="description"]');

            return {
                title: titleInput.val(),
                description: descriptionInput.val()
            }
        },
        setValue: function(params) {
            if (params.title !== undefined) {
                this.element.find('[name="title"]').val(params.title);
            }
            if (params.description !== undefined) {
                this.element.find('[name="description"]').val(params.description);
            }
        }
    };

    return AddView;
});