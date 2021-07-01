const express = require("express");
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged-in user
// @access      Private
router.get("/", (req, res) => {
  res.json({ msg: "Get logged-in user." });
});

// @route       POST api/auth
// @desc        Get logged-in user
// @access      Private
router.post("/", (req, res) => {
  res.json({ msg: "Authenticate logged-in user." });
});

module.exports = router;
