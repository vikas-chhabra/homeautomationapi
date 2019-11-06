const express = require("express");
const app = express.Router();
const device = require('../controller/deviceController');

app.post("/", device.postDeviceStatus)
app.post("/getStatus", device.getDevice)

module.exports = app;