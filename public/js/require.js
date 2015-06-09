requirejs.config({
    baseUrl: './js/',
    paths: {
        jquery: 'lib/jquery-2.1.4.min',
        bootstrap: 'lib/bootstrap.min',
        lodash: ''
    },
    shim: {
        app: ['bootstrap', 'lib/custom/controller'],
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: ['jquery']
    }
});