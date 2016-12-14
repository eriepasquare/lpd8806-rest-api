'use strict';

exports.v1ChaseGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * speed (String)
  **/
    var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "speed", "value" : args.speed.value.toString() },
      { "property" : "r", "value" : args.r.value.toString() },
      { "property" : "g", "value" : args.g.value.toString() },
      { "property" : "b", "value" : args.b.value.toString() }
    ],
    "animation" : "chase",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1FlowGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * brightness (String)
  **/
    var examples = {};
  examples['application/json'] = {
      "properties" : [
        { "property" : "brightness", "value" : args.brightness.value },
        { "property" : "r", "value" : args.r.value.toString() },
        { "property" : "g", "value" : args.g.value.toString() },
        { "property" : "b", "value" : args.b.value.toString() }
      ],
    "animation" : "flow",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1JoinGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * brightness (String)
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "brightness", "value" : args.brightness.value },
      { "property" : "r", "value" : args.r.value.toString() },
      { "property" : "g", "value" : args.g.value.toString() },
      { "property" : "b", "value" : args.b.value.toString() }
    ],
    "animation" : "join",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1PulseGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * speed (String)
  **/
    var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "speed", "value" : args.speed.value },
      { "property" : "r", "value" : args.r.value.toString() },
      { "property" : "g", "value" : args.g.value.toString() },
      { "property" : "b", "value" : args.b.value.toString() }
    ],
    "animation" : "pulse",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1RainbowGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * brightness (String)
  * speed (String)
  **/
    var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "speed", "value" : args.speed.value },
      { "property" : "brightness", "value" : args.brightness.value }
    ],
    "animation" : "rainbow",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1RaveGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * speed (String)
  **/
  var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "speed", "value" : args.speed.value }
    ],
    "animation" : "rave",
    "status" : "running"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}


exports.v1PauseGET = function(args, res, next) {
  /**
   * NO parameters expected in the args:
  **/
  var examples = {};
  examples['application/json'] = {
    "properties" : [],
    "animation" : "pause",
    "status" : "paused"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.v1StopGET = function(args, res, next) {
  /**
   * NO parameters expected in the args:
  **/
  var examples = {};
  examples['application/json'] = {
    "properties" : [],
    "animation" : "stop",
    "status" : "stopped"
  };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}
