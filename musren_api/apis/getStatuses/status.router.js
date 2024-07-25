// ./apis/getStatuses/status.router.js
const { handleStatusData } = require("./status.controller");
const express = require("express");

const router = express.Router();

router.get("/status", handleStatusData);

module.exports = router;

