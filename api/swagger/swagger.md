LPD8806 Async REST API
======================
A REST API that exposes the LED light strip animations provided by lpd8806-asyncfx (which wraps the lpd8806-async module).  The following animations can be configured (color, speed, brightness) and started: chase, flow, join, pulse, rainbow, rave

**Version:** 1.0.0

### /v1/chase
---
##### ***POST***
**Description:** Start the colorChase animation exposed by lpd8806-asyncfx

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| r     | query      | intensity of red component in the RGB color model: [0 to 255] | Yes | number |
| g     | query      | intensity of green component in the RGB color model: [0 to 255] | Yes | number |
| b     | query      | intensity of blue component in the RGB color model: [0 to 255] | Yes | number |
| speed | query      | speed of the LED animation: [fastest, faster, fast, normal, slow, slower, slowest] | Yes | string  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/flow
---
##### ***POST***
**Description:** Start the flow animation exposed by lpd8806-asyncfx (also known as the Knight Rider affect)

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| r     | query      | intensity of red component in the RGB color model: [0 to 255] | Yes | number |
| g     | query      | intensity of green component in the RGB color model: [0 to 255] | Yes | number |
| b     | query      | intensity of blue component in the RGB color model: [0 to 255] | Yes | number |
| brightness | query      | brightness of the LED light strip: [brightest, brighter, bright, normal, dim, dimmer, dimmest]| Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/join
---
##### ***POST***
**Description:** Start the joinEffect animation exposed by lpd8806-asyncfx

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| r     | query      | intensity of red component in the RGB color model: [0 to 255] | Yes | number |
| g     | query      | intensity of green component in the RGB color model: [0 to 255] | Yes | number |
| b     | query      | intensity of blue component in the RGB color model: [0 to 255] | Yes | number |
| brightness | query      | brightness of the LED light strip: [brightest, brighter, bright, normal, dim, dimmer, dimmest]| Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/pulse
---
##### ***POST***
**Description:** Start the pulseColor animation exposed by lpd8806-asyncfx (can also achieve a 'blink' affect when the speed is set fast enough).

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| r     | query      | intensity of red component in the RGB color model: [0 to 255] | Yes | number |
| g     | query      | intensity of green component in the RGB color model: [0 to 255] | Yes | number |
| b     | query      | intensity of blue component in the RGB color model: [0 to 255] | Yes | number |
| speed | query      | speed of the LED animation: [fastest, faster, fast, normal, slow, slower, slowest] | Yes | string  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/rainbow
---
##### ***POST***
**Description:** Start the rainbow animation exposed by lpd8806-asyncfx

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| brightness | query      | brightness of the LED light strip: [brightest, brighter, bright, normal, dim, dimmer, dimmest]| Yes | string |
| speed | query      | speed of the LED animation: [fastest, faster, fast, normal, slow, slower, slowest] | Yes | string  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/rave
---
##### ***POST***
**Description:** Start the rave animation exposed by lpd8806-asyncfx.  Randomly color each led on/off with random colors.

**Parameters**

| Name  | Located in | Description | Required | Type |
| ----  | ---------- | ----------- | -------- | ---- |
| speed | query      | speed of the LED animation: [fastest, faster, fast, normal, slow, slower, slowest] | Yes | string  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/pause
---
##### ***POST***
**Description:** Pause the active animation.

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |

### /v1/stop
---
##### ***POST***
**Description:** Stop the active animation.

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | State of animation requested |
| default | Unexpected error |
