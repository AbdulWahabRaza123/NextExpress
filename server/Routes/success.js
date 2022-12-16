const express = require("express");
const router = express.Router();
router.get("/success", (req, res) => {
  console.log("Hello Success");
  return res.json("We dare it");
});
router.get("/error", (req, res) => {
  return res.json("We can't dare it");
});
module.exports = router;
