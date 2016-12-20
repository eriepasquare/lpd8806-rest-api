'use strict';
var led_count = parseInt(process.env.LPD8806_LED_COUNT, 10) || 32;
var device_name = process.env.LPD8806_DEVICE_NAME || '/dev/spidev0.1'
var leds = require('lpd8806-asyncfx')(led_count, device_name);
var brightnessDecoderRing = {
  "brightest":1.00,
  "brighter": 0.75,
  "bright":   0.65,
  "normal":   0.50,
  "dim":      0.35,
  "dimmer":   0.25,
  "dimmest":  0.15
};

exports.v1ChasePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * speed (String)
  **/
  var speedDecoderRing = {
    "fastest":  1,
    "faster":  10,
    "fast":    20,
    "normal":  30,
    "slow":    40,
    "slower":  50,
    "slowest": 60
  };
  var speed = speedDecoderRing[args.speed.value];
  leds.colorChase(args.r.value, args.g.value, args.b.value, speed);
  var examples = {};
  examples['application/json'] = {
    "properties" : [
      { "property" : "speed", "value" : args.speed.value },
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

exports.v1FlowPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * brightness (String)
  **/
  var brightness = brightnessDecoderRing[args.brightness.value];

  leds.flow(args.r.value, args.g.value, args.b.value, brightness);

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

exports.v1JoinPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * brightness (String)
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  **/
  var brightness = brightnessDecoderRing[args.brightness.value];

  leds.joinEffect(args.r.value, args.g.value, args.b.value, brightness);

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

exports.v1PulsePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * r (BigDecimal)
  * g (BigDecimal)
  * b (BigDecimal)
  * speed (String)
  **/
  var speedDecoderRing = {
    "fastest": 5,
    "faster":  25,
    "fast":    50,
    "normal":  75,
    "slow":    100,
    "slower":  125,
    "slowest": 150
  };
  var speed = speedDecoderRing[args.speed.value];
  leds.pulseColor(args.r.value, args.g.value, args.b.value, speed);

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

exports.v1RainbowPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * brightness (String)
  * speed (String)
  **/
  var speedDecoderRing = {
    "fastest":  1,
    "faster":   5,
    "fast":    10,
    "normal":  15,
    "slow":    20,
    "slower":  25,
    "slowest": 30
  };
  var speed = speedDecoderRing[args.speed.value];
  var brightness = brightnessDecoderRing[args.brightness.value];

  leds.rainbow(brightness, speed);
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

exports.v1RavePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * speed (String)
  **/
  var speedDecoderRing = {
    "fastest":  10,
    "faster":   50,
    "fast":    100,
    "normal":  200,
    "slow":    300,
    "slower":  400,
    "slowest": 500
  };
  var speed = speedDecoderRing[args.speed.value];
  leds.rave(speed);

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


exports.v1PausePOST = function(args, res, next) {
  /**
   * NO parameters expected in the args:
  **/
  leds.stopAnimation();
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

exports.v1StopPOST = function(args, res, next) {
  /**
   * NO parameters expected in the args:
  **/
  leds.off();
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

process.on('SIGINT', function() {
    leds.off();
    // Trigger exit process
    process.exit(0);
});
