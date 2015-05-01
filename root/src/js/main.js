require.config({
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'mapbox': {
      exports: 'L'
    }
  }
});

require(["app"],
  function(app) {
    app.init();
  });
