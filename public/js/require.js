requirejs.config({
    baseUrl: './js/',
    paths: {
        jquery: 'lib/jquery-2.1.4.min',
        bootstrap: 'lib/bootstrap.min'
    },
    shim: {
        app: ['bootstrap', 'lib/custom/widget'],
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: ['jquery']
    }
});