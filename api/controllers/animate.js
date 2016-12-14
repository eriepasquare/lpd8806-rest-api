'use strict';

var url = require('url');


var Animate = require('./animateService');


module.exports.v1ChasePOST = function v1ChasePOST (req, res, next) {
  Animate.v1ChasePOST(req.swagger.params, res, next);
};

module.exports.v1FlowPOST = function v1FlowPOST (req, res, next) {
  Animate.v1FlowPOST(req.swagger.params, res, next);
};

module.exports.v1JoinPOST = function v1JoinPOST (req, res, next) {
  Animate.v1JoinPOST(req.swagger.params, res, next);
};

module.exports.v1PulsePOST = function v1PulsePOST (req, res, next) {
  Animate.v1PulsePOST(req.swagger.params, res, next);
};

module.exports.v1RainbowPOST = function v1RainbowPOST (req, res, next) {
  Animate.v1RainbowPOST(req.swagger.params, res, next);
};

module.exports.v1RavePOST = function v1RavePOST (req, res, next) {
  Animate.v1RavePOST(req.swagger.params, res, next);
};

module.exports.v1PausePOST = function v1PausePOST (req, res, next) {
  Animate.v1PausePOST(req.swagger.params, res, next);
};

module.exports.v1StopPOST = function v1StopPOST (req, res, next) {
  Animate.v1StopPOST(req.swagger.params, res, next);
};
