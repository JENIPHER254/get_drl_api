const { handleDLRCallback } = require("./callback.controller");
const express = require("express");

// imposting router function from express
const router = express.Router();

router.get("/dlr", handleDLRCallback);

// export module
module.exports = router;
