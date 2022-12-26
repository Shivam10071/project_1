const express = require("express");
const Topic = require("../models/topic");
const router = express.Router();

router.post("/addtopic", async function (req, res) {
    try {
      const newtopic = new Topic(req.body);
      await newtopic.save();
      res.send("Topic  Added Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  });


  router.get('/addtopic',async function(req,res){
    Topic.find(function(err, topic) {
        if (err) {
          console.log(err);
        } else {
          res.json(topic);
        }
      });

  })

  router.get('/addtopic/:id',async function(req,res){
    let id = req.params.id;
    Topic.findById(id,function(err, topic) {
        if (err) {
          console.log(err);
        } else {
          res.json(topic);
        }
      });
  })


  module.exports = router;