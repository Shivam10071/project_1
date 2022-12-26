const express = require("express");
const User = require("../models/user");
const router = express.Router();


router.post("/add", async function (req, res) {
    try {
      const newuser = new User(req.body);
      let x = await newuser.save();
      res.send(x)
    } catch (error) {
      res.status(500).json(error);
    }
  });

  module.exports = router;