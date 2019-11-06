const express = require("express");
const app = express.Router();
const device = require('../controller/deviceController');

app.post("/", device.postDeviceStatus)
app.get("/:name", device.getDevice)

module.exports = app;