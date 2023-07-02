const express = require('express');
const {Op} = require("sequelize");
const router = express.Router();
const db = require("../../models/index");
const Comments = db.comments;


// Position page route.
router.get('/:roomId', function (req, res) {
   Comments.findAll({
       where: {
           roomId: {
               [Op.eq]: req.params.roomId
           }
       }
   })
       .then((model) => res.json(model))
       .catch((err) => res.send(err))
})


module.exports = router;