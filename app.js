'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.LPD8806_PORT || 10030;
  app.listen(port);

  console.log('SwaggerUi: http://127.0.0.1:' + port + '/docs');

  if (swaggerExpress.runner.swagger.paths['/v1/rave']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/rave?speed=normal');
  }
});
