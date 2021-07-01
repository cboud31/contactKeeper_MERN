const express = require("express");
const router = express.Router();

// @route       GET api/contacts
// @desc        Get a user's contacts
// @access      Private
router.get("/", (req, res) => {
  res.json({ msg: "Get a user's contacts." });
});

// @route       POST api/contacts
// @desc        Create a new contact
// @access      Private
router.post("/", (req, res) => {
  res.json({ msg: "Create a new contact." });
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", (req, res) => {
  res.json({ msg: `Update contact with id of ${req.params.id}` });
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete("/:id", (req, res) => {
  res.json({ msg: `Update contact with id of ${req.params.id}` });
});

module.exports = router;
