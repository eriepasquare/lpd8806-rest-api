'use strict';

var url = require('url');


var Animate = require('./animateService');


module.exports.v1ChaseGET = function v1ChaseGET (req, res, next) {
  Animate.v1ChaseGET(req.swagger.params, res, next);
};

module.exports.v1FlowGET = function v1FlowGET (req, res, next) {
  Animate.v1FlowGET(req.swagger.params, res, next);
};

module.exports.v1JoinGET = function v1JoinGET (req, res, next) {
  Animate.v1JoinGET(req.swagger.params, res, next);
};

module.exports.v1PulseGET = function v1PulseGET (req, res, next) {
  Animate.v1PulseGET(req.swagger.params, res, next);
};

module.exports.v1RainbowGET = function v1RainbowGET (req, res, next) {
  Animate.v1RainbowGET(req.swagger.params, res, next);
};

module.exports.v1RaveGET = function v1RaveGET (req, res, next) {
  Animate.v1RaveGET(req.swagger.params, res, next);
};

module.exports.v1PauseGET = function v1PauseGET (req, res, next) {
  Animate.v1PauseGET(req.swagger.params, res, next);
};

module.exports.v1StopGET = function v1StopGET (req, res, next) {
  Animate.v1StopGET(req.swagger.params, res, next);
};
