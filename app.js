'use strict';

var leds = require('lpd8806-asyncfx')(48, '/dev/spidev0.1');

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10030;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/api']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/rave?speed=normal');
  }
});

process.on('SIGINT', function() {
    leds.off();
    // Trigger exit process
    process.exit(0);
});
