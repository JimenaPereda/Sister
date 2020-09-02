const router = require("express").Router();
const db = require("../models");


router.get("/api/profile", (req, res) => {
    console.log("User")
    db.User.find({})
    .then(dbUsers => {
     

      res.json(dbUsers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/createprofile", (req, res) => {
    console.log("User")
    db.User.create(req.body)
    .then(user => {
     

      res.json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
