const db = require("../../models");
const {Op} = require("sequelize");
const express = require("express");
const Room = db.rooms;
const router = express.Router();

router.get('/:hotelId',(req,res) => {
    Room.findAll({
        where: {
            hotelId:{
                [Op.eq]: req.params.hotelId
            }
        }
    })
        .then((model) => res.json(model))
        .catch((err) => res.send(err))
})

module.exports = router