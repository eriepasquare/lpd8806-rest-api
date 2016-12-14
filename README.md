# LPD8806 Async REST API

A REST API that exposes the LED light strip animations provided by [lpd8806-asyncfx](https://www.npmjs.com/package/lpd8806-asyncfx) (which wraps the [lpd8806-async](https://www.npmjs.com/package/lpd8806-async) module).  This nodejs app is intended to run on (and only tested on) the Raspberry Pi.  The following light strip animations can be configured (color, speed, brightness) and started through HTTP POST calls to the app:
 * chase
 * flow
 * join
 * pulse
 * rainbow
 * rave
 * pause
 * stop

### Install
From the command line of your Raspberry Pi:
```bash
git clone https://github.com/eriepasquare/lpd8806-rest-api.git
```

### Start
From the command line of your Raspberry Pi:

```bash
cd lpd8806-rest-api

export LPD8806_PORT=3000;
export LPD8806_LED_COUNT=160;
export LPD8806_DEVICE_NAME=/dev/spidev0.1;

npm install
node app.js
```

### Explore

##### Documentation
The API is documented here: [api/swagger/swagger.md](api/swagger/swagger.md)

##### SwaggerUi
Once the app is running you can interact with the API by visiting the SwaggerUi here: http://0.0.0.0:3000/docs  (replacing 0.0.0.0 with the IP address of your RaspberryPi)

##### cURL
replace 0.0.0.0 with the IP address of your RaspberryPi:
```bash
curl -X POST  'http://0.0.0.0:3000/api/v1/chase?r=0&g=255&b=0&speed=fastest'

curl -X POST 'http://0.0.0.0:3000/api/v1/rainbow?speed=normal&brightness=normal'

```
