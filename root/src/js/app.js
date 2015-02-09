define(
  [
    'jquery',
    'underscore',
    'templates'
  ],
  function(jQuery, _, templates){
    var app = app || {};

    app.init = function() {
      console.log("app initialized");
      jQuery("body").append(templates["template.html"]({test: "Hello world!"}));
    };

    return app;

});