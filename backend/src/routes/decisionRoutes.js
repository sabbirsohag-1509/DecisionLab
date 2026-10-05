const express = require("express");
const { analyzeDecision } = require("../controllers/decisionController");

const router = express.Router();

router.post("/analyze", analyzeDecision);

module.exports = router;
