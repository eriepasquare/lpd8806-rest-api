#!/bin/bash

PROTOCOL=http
HOST=localhost
PORT=$LPD8806_PORT
BASE_URL=/api

# colorChase: function(r, g, b, speed) {
# flow: function(r, g, b, brightness) {
# joinEffect: function(r, g, b, brightness) {
# pulseColor: function(r, g, b, speed) {
# rainbow: function(brightness, speed)
# rave: function(speed, colorsArray) {

URLS="/v1/chase?r=255&g=0&b=0&speed=slowest,\
      /v1/chase?r=0&g=255&b=0&speed=slower,\
      /v1/chase?r=0&g=0&b=255&speed=slow,\
      /v1/chase?r=255&g=0&b=255&speed=normal,\
      /v1/chase?r=255&g=255&b=255&speed=fast,\
      /v1/chase?r=0&g=255&b=255&speed=faster,\
      /v1/chase?r=255&g=255&b=0&speed=fastest,\
      /v1/flow?r=255&g=255&b=255&brightness=dimmest,\
      /v1/pause,\
      /v1/flow?r=255&g=255&b=255&brightness=dimmer,\
      /v1/stop,\
      /v1/flow?r=255&g=255&b=255&brightness=dim,\
      /v1/flow?r=255&g=255&b=255&brightness=normal,\
      /v1/flow?r=255&g=255&b=255&brightness=bright,\
      /v1/flow?r=255&g=255&b=255&brightness=brighter,\
      /v1/flow?r=255&g=255&b=255&brightness=brightest,\
      /v1/pause,\
      /v1/stop,\
      /v1/join?r=0&g=0&b=255&brightness=normal,\
      /v1/join?r=0&g=255&b=0&brightness=normal,\
      /v1/join?r=0&g=255&b=255&brightness=normal,\
      /v1/join?r=255&g=0&b=0&brightness=normal,\
      /v1/join?r=255&g=0&b=255&brightness=normal,\
      /v1/join?r=255&g=255&b=0&brightness=normal,\
      /v1/join?r=255&g=255&b=255&brightness=normal,\
      /v1/pulse?r=0&g=0&b=255&speed=slowest,\
      /v1/pulse?r=0&g=0&b=255&speed=normal,\
      /v1/pulse?r=0&g=0&b=255&speed=fastest,\
      /v1/rainbow?speed=slowest&brightness=dimmest,\
      /v1/rainbow?speed=slower&brightness=dimmer,\
      /v1/rainbow?speed=slow&brightness=dim,\
      /v1/rainbow?speed=normal&brightness=normal,\
      /v1/rainbow?speed=fast&brightness=bright,\
      /v1/rainbow?speed=faster&brightness=brighter,\
      /v1/rainbow?speed=fastest&brightness=brightest,\
      /v1/pause,\
      /v1/rave?speed=slowest,\
      /v1/rave?speed=slower,\
      /v1/rave?speed=slow,\
      /v1/rave?speed=normal,\
      /v1/rave?speed=fast,\
      /v1/rave?speed=faster,\
      /v1/rave?speed=fastest,\
      /v1/stop"
IFS=',' read -ra URL_ARR <<< "$URLS"
for url in "${URL_ARR[@]}"; do
  # trim leading 's/^ *//' and trailing 's/ *$//' spaces
  url=$(echo "$url" | sed -e 's/^ *//' -e 's/ *$//')
  echo ""
  echo ""
  echo "------------------------------------------------------------------------"
  echo "Ready to Request: $url"
  read -p "Press [Enter] key to continue..."

  curl -X POST -s "$PROTOCOL://$HOST:$PORT$BASE_URL$url"

done
