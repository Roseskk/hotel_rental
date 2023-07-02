const db = require("../../models");
const {Op} = require("sequelize");
const express = require("express");
const Room = db.rooms;
const Hotel = db.hotels;
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

router.get('/room/:hotelId/:roomId', (req,res) => {
    Room.belongsTo(Hotel)
    Hotel.hasMany(Room)
    Room.findAll({
        where: {
            id: {
                [Op.eq]: req.params.roomId
            }
        },
        include: [{
            model: Hotel,
            where: {
                id: {
                    [Op.eq]: req.params.hotelId
                },
            }
        }]
    })
        .then((model) => res.json(model))
        .catch((err) => res.send(err))
})

module.exports = router